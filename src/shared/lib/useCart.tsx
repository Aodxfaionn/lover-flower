import { useState } from "react";
import { item } from "shared/model/types";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<item[]>([]);
  const addItemToCart = (newItem: item) => {
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  };
  console.log(cartItems)
  return {
    cartItems,
    addItemToCart,
  };
};
