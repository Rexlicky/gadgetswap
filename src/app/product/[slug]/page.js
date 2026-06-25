import { products } from "@/data/products";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import RelatedProducts from "@/components/product/RelatedProducts";
import ProductGallery from "@/components/product/ProductGallery";
import ProductReviews from "@/components/product/ProductReviews";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="page-transition min-h-screen bg-black text-white flex items-center justify-center">
        Produk tidak ditemukan.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-32 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <ProductGallery emoji={product.emoji} />
        </div>

        <div>
          <ProductBreadcrumb productName={product.name} />

          <p className="text-cyan-400">{product.category}</p>

          <h1 className="mt-3 text-5xl font-bold">{product.name}</h1>

          <p className="mt-4 text-3xl font-bold">{product.price}</p>

          <p className="mt-6 leading-7 text-white/60">{product.description}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-white/50">Skor Kondisi</p>

              <h3 className="mt-2 text-3xl font-bold text-cyan-300">
                {product.score}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-white/50">Status</p>

              <h3 className="mt-2 text-xl font-bold text-green-400">
                {product.badge}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <ProductReviews />

        <RelatedProducts currentProduct={product} />
      </div>
    </main>
  );
}
