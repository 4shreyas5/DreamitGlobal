import { prisma } from "@/lib/prisma";

/**
 * Wizard reference data. Cities are deliberately NOT loaded here — only the
 * (small) list of countries; cities are fetched on demand once a country is chosen.
 */
export async function getWizardTaxonomy() {
  const [categories, countries, amenities] = await Promise.all([
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.country.findMany({ orderBy: { name: "asc" } }),
    prisma.amenity.findMany({ orderBy: { name: "asc" } }),
  ]);

  return {
    categories: categories.map((c) => ({ id: c.id, name: c.name })),
    countries: countries.map((c) => ({ id: c.id, name: c.name, code: c.code })),
    amenities: amenities.map((a) => ({ id: a.id, name: a.name })),
  };
}

/** For editing an existing property: the country plus the city options for it. */
export async function getWizardLocationChain(cityId: string) {
  const city = await prisma.city.findUnique({
    where: { id: cityId },
    select: { state: { select: { countryId: true } } },
  });
  const countryId = city?.state.countryId ?? "";
  const cities = countryId
    ? await prisma.city.findMany({
        where: { state: { countryId } },
        select: { id: true, name: true },
        orderBy: { name: "asc" },
      })
    : [];
  return { countryId, cities };
}
