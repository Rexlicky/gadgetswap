"use client";

import { useState } from "react";
import SearchBar from "@/components/marketplace/SearchBar";
import CategoryFilters from "@/components/marketplace/CategoryFilters";
import ProductGrid from "@/components/marketplace/ProductGrid";
import SortDropdown from "@/components/marketplace/SortDropdown";

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="page-transition min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-12">
          <p className="text-cyan-400">Marketplace Gadget</p>

          <h1 className="mt-3 text-5xl font-bold">Temukan Gadget Impianmu</h1>

          <p className="mt-4 text-white/60">
            Jelajahi ribuan gadget premium dengan perlindungan rekber dan skor
            kondisi transparan.
          </p>
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <CategoryFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />

        <ProductGrid
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          searchQuery={searchQuery}
          resetFilters={() => {
            setSelectedCategory("Semua");
            setSortBy("default");
            setSearchQuery("");
          }}
        />
      </div>
    </main>
  );
}
