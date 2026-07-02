import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "GadgetSwap",
    template: "%s | GadgetSwap",
  },

  description:
    "Marketplace gadget premium dengan sistem rekber, COD terverifikasi, dan penilaian kondisi otomatis.",

  keywords: [
    "gadget",
    "marketplace",
    "rekber",
    "jual beli gadget",
    "smartphone",
    "laptop",
  ],

  authors: [
    {
      name: "Rexlicky Verdhika Sagatha",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>

              {children}
            
            </CartProvider>
            <Toaster position="top-right" richColors closeButton />
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
