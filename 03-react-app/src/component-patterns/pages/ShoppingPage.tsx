import { ProductCard } from "../components/ProductCard";
import { product1 } from "../data/products";

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
      </div>
    </div>
  );
};
