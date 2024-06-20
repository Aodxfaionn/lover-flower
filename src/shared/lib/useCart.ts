import { useState } from "react";
import { item } from "shared/model/types";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<item[]>([]);
  const addItemToCart = (product: item) => {
    setCartItems([...cartItems, product]);
  };
  const removeFromCart = (productId: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCartItems);
  };
  return {
    cartItems,
    addItemToCart,
    removeFromCart
  };
};
