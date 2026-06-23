import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      slug: "iphone-15-pro",
      emoji: "📱",
      name: "iPhone 15 Pro",
      price: "Rp 14.999.000",
      score: "96%",
      badge: "Dilindungi Rekber",
    },
    {
      slug: "macbook-pro-m3",
      emoji: "💻",
      name: "MacBook Pro M3",
      price: "Rp 28.500.000",
      score: "98%",
      badge: "Penjual Terverifikasi",
    },
    {
      slug: "galaxy-s25-ultra",
      emoji: "📱",
      name: "Galaxy S25 Ultra",
      price: "Rp 16.999.000",
      score: "95%",
      badge: "COD Tersedia",
    },
    {
      slug: "rog-zephyrus-g16",
      emoji: "💻",
      name: "ROG Zephyrus G16",
      price: "Rp 24.750.000",
      score: "94%",
      badge: "Dilindungi Rekber",
    },
    {
      slug: "google-pixel-10",
      emoji: "📱",
      name: "Google Pixel 10",
      price: "Rp 12.500.000",
      score: "93%",
      badge: "COD Tersedia",
    },
    {
      slug: "macbook-air-m4",
      emoji: "💻",
      name: "MacBook Air M4",
      price: "Rp 19.999.000",
      score: "97%",
      badge: "Penjual Terverifikasi",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}
