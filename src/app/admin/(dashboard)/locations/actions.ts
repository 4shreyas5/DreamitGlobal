"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdminUser } from "@/lib/admin-auth";
import { slugify } from "@/lib/validations/property";
import { ensureDefaultLocality, ensureDefaultState, LOCATIONS_CACHE_TAG } from "@/lib/taxonomy";

// City slugs are top-level URLs (/paris) — they must never shadow a static route.
const RESERVED_SLUGS = new Set(["buy", "rent", "search", "contact", "about", "admin", "api", "properties", "locations", "categories", "cities", "country"]);

function refreshLocations() {
  revalidatePath("/admin/locations");
  revalidateTag(LOCATIONS_CACHE_TAG, { expire: 0 });
}

export async function createCountry(formData: FormData) {
  await requireAdminUser();
  const name = String(formData.get("name") ?? "").trim();
  const code = String(formData.get("code") ?? "").trim().toUpperCase();
  if (!name || !/^[A-Z]{2}$/.test(code)) return;

  const country = await prisma.country.upsert({
    where: { code },
    update: {},
    create: { name, code },
  });
  await ensureDefaultState(country.id);
  refreshLocations();
}

export async function createCity(formData: FormData) {
  await requireAdminUser();
  const name = String(formData.get("name") ?? "").trim();
  const countryId = String(formData.get("countryId") ?? "");
  const imageUrl = String(formData.get("imageUrl") ?? "") || undefined;
  if (!name || !countryId) return;

  // Same-named cities exist in different countries — disambiguate the slug
  // with the country code rather than failing on the unique constraint.
  const country = await prisma.country.findUnique({ where: { id: countryId }, select: { code: true } });
  if (!country) return;
  let slug = slugify(name);
  if (!slug) return;
  if (RESERVED_SLUGS.has(slug) || (await prisma.city.findUnique({ where: { slug } }))) {
    slug = `${slug}-${country.code.toLowerCase()}`;
  }
  if (await prisma.city.findUnique({ where: { slug } })) return;

  const state = await ensureDefaultState(countryId);
  const city = await prisma.city.create({ data: { name, slug, stateId: state.id, imageUrl } });
  await ensureDefaultLocality(city.id);
  refreshLocations();
}
