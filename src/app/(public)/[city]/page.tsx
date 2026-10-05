import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { searchProperties } from "@/lib/properties";
import { PropertyGrid } from "@/components/property/property-grid";
import { isRenderableImageUrl } from "@/lib/storage";

export const dynamic = "force-dynamic";

// Cached per request — called from both generateMetadata and the page body.
const getCity = cache(async (slug: string) => {
  return prisma.city.findUnique({
    where: { slug },
    include: { state: { select: { country: { select: { name: true, code: true } } } } },
  });
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = await getCity(citySlug);
  if (!city) return {};
  return {
    title: `Properties in ${city.name}, ${city.state.country.name}`,
    description: `Curated properties in ${city.name}, ${city.state.country.name}, shown and shortlisted by our team.`,
    alternates: { canonical: `/${city.slug}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = await getCity(citySlug);
  if (!city) notFound();

  const { properties, count } = await searchProperties({ cityId: city.id });

  return (
    <div>
      <section className="relative flex min-h-[360px] items-end overflow-hidden bg-ink text-canvas">
        {isRenderableImageUrl(city.imageUrl) && (
          <Image src={city.imageUrl} alt="" fill sizes="100vw" className="object-cover opacity-70" />
        )}
        <div className="relative mx-auto w-full max-w-(--breakpoint-xl) px-4 pb-10 sm:px-6 lg:px-10">
          <p className="text-sm text-canvas/80">
            <Link href={`/country/${city.state.country.code.toLowerCase()}`} className="hover:underline">
              {city.state.country.name}
            </Link>
          </p>
          <h1 className="font-display mt-1 text-4xl font-light">Properties in {city.name}</h1>
          <p className="mt-2 text-canvas/80">{count} curated homes</p>
        </div>
      </section>

      <section className="mx-auto max-w-(--breakpoint-xl) px-4 py-12 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-medium text-ink">All properties</h2>
          <Link href={`/search?city=${city.id}`} className="text-sm font-medium text-accent">
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
