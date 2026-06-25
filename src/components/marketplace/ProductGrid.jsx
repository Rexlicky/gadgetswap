import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid({ selectedCategory, sortBy }) {
  const filteredProducts =
    selectedCategory === "Semua"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts];

  if (sortBy === "lowest-price") {
    sortedProducts.sort(
      (a, b) =>
        parseInt(a.price.replace(/[^\d]/g, "")) -
        parseInt(b.price.replace(/[^\d]/g, "")),
    );
  }

  if (sortBy === "highest-price") {
    sortedProducts.sort(
      (a, b) =>
        parseInt(b.price.replace(/[^\d]/g, "")) -
        parseInt(a.price.replace(/[^\d]/g, "")),
    );
  }

  if (sortBy === "highest-score") {
    sortedProducts.sort((a, b) => parseInt(b.score) - parseInt(a.score));
  }

  return (
    <>
      {/* Product Counter */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{selectedCategory}</h3>

          <p className="mt-1 text-sm text-white/50">
            {sortedProducts.length} Produk Ditemukan
          </p>
        </div>
      </div>

      {/* Product Grid */}
      {sortedProducts.length === 0 ? (
  <div
    className="
      flex
      flex-col
      items-center
      justify-center
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      py-20
      text-center
    "
  >
    <div className="mb-4 text-6xl">🔍</div>

    <h3 className="text-2xl font-semibold">
      Produk Tidak Ditemukan
    </h3>

    <p className="mt-3 max-w-md text-white/50">
      Coba gunakan kata kunci lain atau pilih kategori
      yang berbeda.
    </p>
  </div>
) : (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
        </div>
      )}
    </>
  );
}
