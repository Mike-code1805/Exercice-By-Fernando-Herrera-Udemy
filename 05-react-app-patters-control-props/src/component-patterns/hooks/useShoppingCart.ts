import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/products.interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});
  console.log(shoppingCart);
  const onProductCountChange = ({
    product,
    count,
  }: {
    product: Product;
    count: number;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
