import ProductCard from "@/components/marketplace/ProductCard";
import { products } from "@/data/products";

export default function RecentlyViewed({ currentProduct }) {
  const recentlyViewed = products
    .filter((product) => product.slug !== currentProduct.slug)
    .slice(0, 3);

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-3xl font-bold">Baru Dilihat</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentlyViewed.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
}
