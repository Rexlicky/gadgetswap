"use client";

import { useEffect, useState } from "react";
import CartHeader from "@/components/cart/CartHeader";
import EmptyCart from "@/components/cart/EmptyCart";
import OrderSummary from "@/components/cart/OrderSummary";
import PromoCode from "@/components/cart/PromoCode";
import CartItem from "@/components/cart/CartItem";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCart() {
    try {
      const response = await fetch("/api/cart");
      const data = await response.json();

      setCartItems(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <CartHeader />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {loading ? (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-16 text-center text-white/50">
                Memuat keranjang...
              </div>
            ) : cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              cartItems.map((item) => <CartItem key={item.id} item={item} />)
            )}

            <PromoCode />
          </div>

          <OrderSummary subtotal={subtotal} />
        </div>
      </div>
    </main>
  );
}
