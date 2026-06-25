import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid({ selectedCategory }) {
  const filteredProducts =
    selectedCategory === "Semua"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}
