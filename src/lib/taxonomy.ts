import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";

export const LOCATIONS_CACHE_TAG = "locations";
const LOCATIONS_REVALIDATE_SECONDS = 300;

export interface ListedCity {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  countryId: string;
  countryName: string;
  count: number;
}

export interface ListedCountry {
  id: string;
  name: string;
  code: string;
  count: number;
  cities: ListedCity[];
}

/**
 * Cities that currently have at least one PUBLISHED property, busiest first.
 * This — not "every city in the database" — is what public navigation, the
 * homepage search, the filter sheet and the sitemap are built from, so a
 * worldwide location taxonomy doesn't turn into hundreds of empty pages.
 * Cached (shared across requests) and invalidated via the "locations" tag.
 *
 * The user-facing hierarchy is Country → City. The schema's State/Province
 * and Locality tables stay in place but are never surfaced; the country is
 * reached through the city's (internal) state relation.
 */
export const getCitiesWithListings = unstable_cache(
  async (): Promise<ListedCity[]> => {
    const groups = await prisma.property.groupBy({
      by: ["cityId"],
      where: { status: "PUBLISHED" },
      _count: { _all: true },
    });
    if (groups.length === 0) return [];

    const cities = await prisma.city.findMany({
      where: { id: { in: groups.map((g) => g.cityId) } },
      select: {
        id: true,
        name: true,
        slug: true,
        imageUrl: true,
        state: { select: { country: { select: { id: true, name: true } } } },
      },
    });
    const counts = new Map(groups.map((g) => [g.cityId, g._count._all]));

    return cities
      .map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        imageUrl: c.imageUrl,
        countryId: c.state.country.id,
        countryName: c.state.country.name,
        count: counts.get(c.id) ?? 0,
      }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  },
  ["cities-with-listings"],
  { revalidate: LOCATIONS_REVALIDATE_SECONDS, tags: [LOCATIONS_CACHE_TAG] },
);

/** Countries that have published listings (busiest first), each with its listed cities. */
export const getCountriesWithListings = unstable_cache(
  async (): Promise<ListedCountry[]> => {
    const cities = await getCitiesWithListings();
    if (cities.length === 0) return [];

    const countries = await prisma.country.findMany({
      where: { id: { in: [...new Set(cities.map((c) => c.countryId))] } },
      select: { id: true, name: true, code: true },
    });

    return countries
      .map((country) => {
        const countryCities = cities.filter((c) => c.countryId === country.id);
        return {
          ...country,
          count: countryCities.reduce((sum, c) => sum + c.count, 0),
          cities: countryCities,
        };
      })
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  },
  ["countries-with-listings"],
  { revalidate: LOCATIONS_REVALIDATE_SECONDS, tags: [LOCATIONS_CACHE_TAG] },
);

/** Listed cities, busiest first — the homepage "Explore locations" cards. */
export async function getExploreCities(limit = 6) {
  const cities = await getCitiesWithListings();
  if (cities.length > 0) return cities.slice(0, limit);

  const fallback = await prisma.city.findMany({
    take: limit,
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      slug: true,
      imageUrl: true,
      state: { select: { country: { select: { id: true, name: true } } } },
    },
  });
  return fallback.map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    imageUrl: c.imageUrl,
    countryId: c.state.country.id,
    countryName: c.state.country.name,
    count: 0,
  }));
}

export async function getExploreCategories(limit = 6) {
  const categories = await prisma.category.findMany({
    take: limit,
    orderBy: { name: "asc" },
  });

  return categories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    imageUrl: category.imageUrl,
  }));
}

export async function getAllCategories() {
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return categories.map((c) => ({ id: c.id, name: c.name, slug: c.slug }));
}

/**
 * Global mode exposes only Country → City, but the schema still requires every
 * City to hang off a StateProvince and every Property off a Locality. Rather
 * than change the schema, each country gets one internal "default" state
 * (named after the country) and each city one internal default locality
 * (named after the city). Both are created on demand and never shown.
 */
export async function ensureDefaultState(countryId: string) {
  const country = await prisma.country.findUniqueOrThrow({ where: { id: countryId }, select: { name: true } });
  return prisma.stateProvince.upsert({
    where: { countryId_name: { countryId, name: country.name } },
    update: {},
    create: { countryId, name: country.name },
    select: { id: true },
  });
}

export async function ensureDefaultLocality(cityId: string) {
  const city = await prisma.city.findUniqueOrThrow({ where: { id: cityId }, select: { name: true } });
  return prisma.locality.upsert({
    where: { cityId_slug: { cityId, slug: "default" } },
    update: {},
    create: { cityId, name: city.name, slug: "default" },
    select: { id: true },
  });
}
