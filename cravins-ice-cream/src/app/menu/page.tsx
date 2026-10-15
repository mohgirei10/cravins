"use client";

import { useMemo, useState } from "react";
import { Search, Plus, ShoppingBag, SlidersHorizontal } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories, menuItems, formatNaira } from "@/data/menu";
import { MenuCategory, MenuItem } from "@/types/menu";
import { useCart } from "@/context/CartContext";

export default function MenuPage() {
  const [active, setActive] = useState<MenuCategory | "All">("All");
  const [query, setQuery] = useState("");
  const { add, openCart } = useCart();

  const filtered = useMemo(() => {
    return menuItems.filter(
      (item) =>
        (active === "All" || item.category === active) &&
        item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [active, query]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="gold-glow absolute -right-40 -top-32 -z-10 size-[500px] rounded-full blur-3xl" />
        <Container>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-orange">
            Cravings N More
          </p>
          <SectionHeading
            title="Good food. Great cravings."
            description="Explore pasta, rice, and more. Add your favourites to an order and send it to us on WhatsApp."
          />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <label className="flex min-h-12 flex-1 items-center gap-3 rounded-full border border-white/10 bg-charcoal px-5">
              <Search size={18} className="text-muted" />
              <span className="sr-only">Search menu</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the menu..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
            </label>
            <button
              onClick={openCart}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-ink"
            >
              <ShoppingBag size={17} /> View order
            </button>
          </div>
        </Container>
      </section>

      {/* Menu Filter and Grid Section */}
      <section className="pb-24">
        <Container>
          {/* Category Tabs */}
          <div className="sticky top-[72px] z-30 -mx-1 mb-8 overflow-x-auto bg-ink/90 px-1 py-3 backdrop-blur-xl sm:top-[82px]">
            <div className="flex w-max gap-2">
              <button
                onClick={() => setActive("All")}
                className={`rounded-full px-5 py-3 text-sm font-semibold ${
                  active === "All"
                    ? "bg-gold text-ink"
                    : "border border-white/10 text-muted hover:text-cream"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold ${
                    active === category
                      ? "bg-gold text-ink"
                      : "border border-white/10 text-muted hover:text-cream"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Info bar */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted">
              {filtered.length} menu item{filtered.length === 1 ? "" : "s"}
            </p>
            <span className="inline-flex items-center gap-2 text-xs text-muted">
              <SlidersHorizontal size={14} /> Prices in Naira
            </span>
          </div>

          {/* Cards Grid / Empty State */}
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-white/10 p-12 text-center">
              <p className="font-display text-2xl">Nothing found just yet.</p>
              <p className="mt-2 text-sm text-muted">
                Try another search or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="card-hover flex flex-col rounded-card border border-white/10 bg-charcoal p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        item.category === "Pasta" || item.category === "Rice"
                          ? "bg-orange/10 text-orange"
                          : "bg-gold/10 text-gold"
                      }`}
                    >
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="text-xs text-gold">Popular</span>
                    )}
                  </div>

                  <h2 className="mt-5 font-display text-2xl">{item.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                    {item.description}
                  </p>

                  {item.confirmPrice && (
                    <p className="mt-3 text-[11px] leading-5 text-orange">
                      Sample listing — confirm availability and price.
                    </p>
                  )}

                  <div className="mt-5 flex items-center justify-between border-t border-white/[.08] pt-4">
                    <strong className="text-lg text-gold">
                      {formatNaira(item.price)}
                    </strong>
                    <button
                      onClick={() => {
                        add(item);
                        openCart();
                      }}
                      className="inline-flex min-h-10 items-center gap-2 rounded-full bg-gold px-4 text-xs font-bold text-ink hover:bg-gold-light"
                    >
                      <Plus size={16} /> Add
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          <p className="mt-8 text-xs leading-6 text-muted">
            Prices for pasta and rice are transcribed from the provided menu image.
            Protein, porridge, ice cream, waffles and pancake prices are placeholders
            for confirmation before launch.
          </p>
        </Container>
      </section>
    </>
  );
}
