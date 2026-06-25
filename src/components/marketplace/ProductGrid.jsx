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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sortedProducts.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}
