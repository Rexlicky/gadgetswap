import CartHeader from "@/components/cart/CartHeader";
import EmptyCart from "@/components/cart/EmptyCart";
import OrderSummary from "@/components/cart/OrderSummary";
import PromoCode from "@/components/cart/PromoCode";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <CartHeader />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <EmptyCart />

            <PromoCode />
          </div>

          <OrderSummary />
        </div>
      </div>
    </main>
  );
}
