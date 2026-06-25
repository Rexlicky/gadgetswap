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
  <div className="mb-6 flex items-center justify-between">
    <div>
      <h3 className="text-xl font-semibold">
        {selectedCategory}
      </h3>

      <p className="mt-1 text-sm text-white/50">
        {sortedProducts.length} Produk Ditemukan
      </p>
    </div>
  </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sortedProducts.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
      </div>
    </>
  );
}
