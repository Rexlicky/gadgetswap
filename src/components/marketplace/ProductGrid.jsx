import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      emoji: "📱",
      name: "iPhone 15 Pro",
      price: "Rp 14.999.000",
      score: "96%",
      badge: "Dilindungi Rekber",
    },
    {
      emoji: "💻",
      name: "MacBook Pro M3",
      price: "Rp 28.500.000",
      score: "98%",
      badge: "Penjual Terverifikasi",
    },
    {
      emoji: "📱",
      name: "Galaxy S25 Ultra",
      price: "Rp 16.999.000",
      score: "95%",
      badge: "COD Tersedia",
    },
    {
      emoji: "💻",
      name: "ROG Zephyrus G16",
      price: "Rp 24.750.000",
      score: "94%",
      badge: "Dilindungi Rekber",
    },
    {
      emoji: "📱",
      name: "Google Pixel 10",
      price: "Rp 12.500.000",
      score: "93%",
      badge: "COD Tersedia",
    },
    {
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
