"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  async function refreshCart() {
    try {
      const response = await fetch("/api/cart");
      const data = await response.json();

      const total = data.reduce((sum, item) => sum + item.quantity, 0);

      setCartCount(total);
    } catch {
      setCartCount(0);
    }
  }

  useEffect(() => {
    async function loadCart() {
      try {
        const response = await fetch("/api/cart");
        const data = await response.json();

        const total = data.reduce((sum, item) => sum + item.quantity, 0);

        setCartCount(total);
      } catch {
        setCartCount(0);
      }
    }

    loadCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartCount,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
