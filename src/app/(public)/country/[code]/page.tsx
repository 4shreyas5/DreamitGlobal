import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { searchProperties } from "@/lib/properties";
import { PropertyGrid } from "@/components/property/property-grid";
import { EditorialImageCard } from "@/components/shared/editorial-image-card";

export const dynamic = "force-dynamic";

// Cached per request — called from both generateMetadata and the page body.
const getCountry = cache(async (code: string) => {
  if (!/^[A-Za-z]{2}$/.test(code)) return null;
  return prisma.country.findUnique({ where: { code: code.toUpperCase() } });
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const country = await getCountry(code);
  if (!country) return {};
  return {
    title: `Properties in ${country.name}`,
    description: `Curated properties in ${country.name}, shown and shortlisted by our team.`,
    alternates: { canonical: `/country/${country.code.toLowerCase()}` },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const country = await getCountry(code);
  if (!country) notFound();

  const [{ properties, count }, cities] = await Promise.all([
    searchProperties({ countryId: country.id }),
    prisma.city.findMany({
      where: { state: { countryId: country.id }, properties: { some: { status: "PUBLISHED" } } },
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <div>
      <section className="border-b border-border px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <h1 className="font-display text-4xl font-light text-ink">Properties in {country.name}</h1>
          <p className="mt-2 text-ink-secondary">{count} curated homes</p>
        </div>
      </section>

      {cities.length > 0 && (
        <section className="mx-auto max-w-(--breakpoint-xl) px-4 py-12 sm:px-6 lg:px-10">
          <h2 className="font-display text-xl font-medium text-ink">Cities</h2>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {cities.map((city) => (
              <EditorialImageCard
                key={city.id}
                href={`/${city.slug}`}
                label={city.name}
                imageUrl={city.imageUrl}
                imageAlt={`${city.name}, ${country.name}`}
                className="w-48 lg:w-auto"
              />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-(--breakpoint-xl) px-4 py-12 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-medium text-ink">All properties</h2>
          <Link href={`/search?country=${country.id}`} className="text-sm font-medium text-accent">
            Refine on the full search
          </Link>
        </div>
        <div className="mt-6">
          <PropertyGrid properties={properties} priorityCount={3} />
        </div>
      </section>
    </div>
  );
}
