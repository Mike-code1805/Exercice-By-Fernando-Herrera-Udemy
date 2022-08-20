import { ProductCard } from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductCard.Image
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </>
        )}
      </ProductCard>
    </div>
  );
};
