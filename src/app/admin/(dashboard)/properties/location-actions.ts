"use server";

import { prisma } from "@/lib/prisma";
import { requireAdminUser } from "@/lib/admin-auth";

export interface LocationOption {
  id: string;
  name: string;
}

const ID = /^[A-Za-z0-9_-]{1,64}$/;

/**
 * Dependent lookup for the property wizard's Location step: cities are
 * fetched only once a country is chosen, so the browser never receives
 * every city in the world.
 */
export async function getCitiesForCountry(countryId: string): Promise<LocationOption[]> {
  await requireAdminUser();
  if (!ID.test(countryId)) return [];
  return prisma.city.findMany({
    where: { state: { countryId } },
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });
}
