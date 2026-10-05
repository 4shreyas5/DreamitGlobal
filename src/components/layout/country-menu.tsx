"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export interface NavCountry {
  id: string;
  name: string;
  code: string;
  /** Slugs of the country's listed cities — used to recognise which country the visitor is browsing. */
  citySlugs: string[];
}

/**
 * Country switcher: shows the country whose page you're on (or "Countries"),
 * and lists every country that has published listings, plus a link to the
 * full location index.
 */
export function CountryMenu({ countries }: { countries: NavCountry[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const current = countries.find(
    (c) =>
      pathname === `/country/${c.code.toLowerCase()}` ||
      c.citySlugs.some((slug) => pathname === `/${slug}` || pathname.startsWith(`/${slug}/`)),
  );

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative hidden lg:block">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium text-ink hover:bg-canvas-alt"
      >
        {current?.name ?? "Countries"}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3.5 5.25L7 8.75l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 max-h-80 w-56 overflow-y-auto rounded-md border border-border bg-surface py-1 shadow-md">
          {countries.map((country) => (
            <Link
              key={country.id}
              href={`/country/${country.code.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm text-ink hover:bg-canvas-alt"
            >
              {country.name}
            </Link>
          ))}
          <Link
            href="/locations"
            onClick={() => setOpen(false)}
            className="block border-t border-border px-3 py-2 text-sm font-medium text-accent hover:bg-canvas-alt"
          >
            All locations
          </Link>
        </div>
      )}
    </div>
  );
}
