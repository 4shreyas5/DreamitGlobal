import { prisma } from "@/lib/prisma";
import { createCity, createCountry } from "./actions";

const input = "rounded-sm border border-border bg-surface px-3 py-2 text-sm";

export default async function AdminLocationsPage() {
  const [countries, cities] = await Promise.all([
    prisma.country.findMany({ orderBy: { name: "asc" } }),
    prisma.city.findMany({
      include: { state: { select: { country: { select: { name: true } } } } },
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <div className="space-y-12">
      <h1 className="font-display text-2xl font-medium text-ink">Locations</h1>

      <section>
        <h2 className="font-medium text-ink">Countries</h2>
        <form action={createCountry} className="mt-3 flex flex-wrap gap-2">
          <input name="name" placeholder="Country name" className={input} required />
          <input name="code" placeholder="ISO code (US)" maxLength={2} className={input} required />
          <button type="submit" className="rounded-sm bg-accent px-4 py-2 text-sm font-medium text-canvas">
            Add
          </button>
        </form>
        <p className="mt-3 text-xs text-ink-secondary">{countries.length} countries on file.</p>
      </section>

      <section>
        <h2 className="font-medium text-ink">Cities</h2>
        <form action={createCity} className="mt-3 flex flex-wrap gap-2">
          <input name="name" placeholder="City name" className={input} required />
          <select name="countryId" className={input} required>
            <option value="">Country</option>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <input name="imageUrl" placeholder="Image URL (optional)" className={`${input} flex-1`} />
          <button type="submit" className="rounded-sm bg-accent px-4 py-2 text-sm font-medium text-canvas">
            Add
          </button>
        </form>
        <ul className="mt-4 divide-y divide-border rounded-md border border-border">
          {cities.map((city) => (
            <li key={city.id} className="px-3 py-2 text-sm text-ink">
              {city.name} <span className="text-ink-secondary">— {city.state.country.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
