import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        slug: "iphone-15-pro",
        name: "iPhone 15 Pro",
        price: 14999000,
        category: "iPhone",
        description:
          "iPhone 15 Pro kondisi premium dengan baterai sehat dan performa optimal.",
        imageUrl: "/products/iphone15pro.jpg",
        emoji: "📱",
        score: 96,
        badge: "Dilindungi Rekber",
      },
      {
        slug: "iphone-16-pro",
        name: "iPhone 16 Pro",
        price: 18999000,
        category: "iPhone",
        description:
          "iPhone 16 Pro terbaru dengan performa tinggi dan kondisi seperti baru.",
        imageUrl: "/products/iphone16pro.jpg",
        emoji: "📱",
        score: 98,
        badge: "Penjual Terverifikasi",
      },
      {
        slug: "galaxy-s25-ultra",
        name: "Galaxy S25 Ultra",
        price: 16999000,
        category: "Android",
        description:
          "Galaxy S25 Ultra dengan kamera flagship dan layar premium.",
        imageUrl: "/products/galaxys25ultra.jpg",
        emoji: "📱",
        score: 95,
        badge: "COD Tersedia",
      },
      {
        slug: "google-pixel-10",
        name: "Google Pixel 10",
        price: 12500000,
        category: "Android",
        description:
          "Google Pixel dengan pengalaman Android murni dan kamera unggulan.",
        imageUrl: "/products/pixel10.jpg",
        emoji: "📱",
        score: 93,
        badge: "COD Tersedia",
      },
      {
        slug: "macbook-pro-m3",
        name: "MacBook Pro M3",
        price: 28500000,
        category: "Laptop",
        description:
          "MacBook Pro M3 performa tinggi untuk produktivitas dan kreator profesional.",
        imageUrl: "/products/macbookprom3.jpg",
        emoji: "💻",
        score: 98,
        badge: "Penjual Terverifikasi",
      },
      {
        slug: "macbook-air-m4",
        name: "MacBook Air M4",
        price: 19999000,
        category: "Laptop",
        description:
          "MacBook Air M4 ringan, cepat, dan hemat daya untuk penggunaan harian.",
        imageUrl: "/products/macbookairm4.jpg",
        emoji: "💻",
        score: 97,
        badge: "Penjual Terverifikasi",
      },
      {
        slug: "ipad-pro-m4",
        name: "iPad Pro M4",
        price: 18999000,
        category: "iPad",
        description:
          "iPad Pro M4 dengan layar premium dan performa tinggi untuk profesional.",
        imageUrl: "/products/ipadprom4.jpg",
        emoji: "📲",
        score: 98,
        badge: "Like New",
      },
      {
        slug: "ipad-air-m2",
        name: "iPad Air M2",
        price: 12500000,
        category: "iPad",
        description:
          "iPad Air M2 ringan, bertenaga, dan cocok untuk produktivitas harian.",
        imageUrl: "/products/ipadairm2.jpg",
        emoji: "📲",
        score: 96,
        badge: "Dilindungi Rekber",
      },
    ],
  });
}

main()
  .then(async () => {
    console.log("✅ Product seed berhasil.");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("❌ Product seed gagal:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
