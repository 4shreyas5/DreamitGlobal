import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getCountriesWithListings } from "@/lib/taxonomy";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  // Cached (5 min, shared) — countries that actually have published listings.
  const countries = (await getCountriesWithListings()).map(({ id, name, code, cities }) => ({
    id,
    name,
    code,
    citySlugs: cities.map((c) => c.slug),
  }));

  return (
    <>
      <SiteHeader countries={countries} />
      <main className="flex-1">{children}</main>
      <SiteFooter countries={countries} />
    </>
  );
}
