import type { Metadata } from "next";
import Link from "next/link";
import { getCountriesWithListings } from "@/lib/taxonomy";

export const metadata: Metadata = {
  title: "Locations",
  description: "Browse DreamIT properties by country and city.",
  alternates: { canonical: "/locations" },
};
export const dynamic = "force-dynamic";

export default async function LocationsPage() {
  const countries = await getCountriesWithListings();

  return (
    <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-16 sm:px-6 lg:px-10">
      <h1 className="font-display text-3xl font-medium text-ink">Locations</h1>
      <p className="mt-2 text-ink-secondary">Countries and cities where we currently have homes to show you.</p>

      {countries.length === 0 ? (
        <p className="mt-10 text-ink-secondary">
          No homes are listed yet. <Link href="/contact" className="text-accent underline">Tell us what you&apos;re looking for.</Link>
        </p>
      ) : (
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <section key={country.id}>
              <h2 className="font-medium text-ink">
                <Link href={`/country/${country.code.toLowerCase()}`} className="hover:underline">
                  {country.name}
                </Link>
              </h2>
              <ul className="mt-3 space-y-2">
                {country.cities.map((city) => (
                  <li key={city.id}>
                    <Link href={`/${city.slug}`} className="text-ink-secondary hover:text-ink">
                      {city.name}
                      <span className="ml-2 text-xs text-ink-tertiary">
                        {city.count} {city.count === 1 ? "home" : "homes"}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
