import ProductCard from "@/components/marketplace/ProductCard";
import { products } from "@/data/products";

export default function RelatedProducts({ currentProduct }) {
  const relatedProducts = products
    .filter(
      (product) =>
        product.slug !== currentProduct.slug &&
        product.category === currentProduct.category,
    )
    .slice(0, 3);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-3xl font-bold">Produk Serupa</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
}
