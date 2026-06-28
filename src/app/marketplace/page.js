"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/marketplace/SearchBar";
import CategoryFilters from "@/components/marketplace/CategoryFilters";
import ProductGrid from "@/components/marketplace/ProductGrid";
import SortDropdown from "@/components/marketplace/SortDropdown";

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Gagal mengambil produk:", error);
      } finally {
        setLoadingProducts(false);
      }
    }

    fetchProducts();
  }, []);

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

        {loadingProducts ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-white/50">
            Memuat produk...
          </div>
        ) : (
          <ProductGrid
            products={products}
            selectedCategory={selectedCategory}
            sortBy={sortBy}
            searchQuery={searchQuery}
            resetFilters={() => {
              setSelectedCategory("Semua");
              setSortBy("default");
              setSearchQuery("");
            }}
          />
        )}
      </div>
    </main>
  );
}
