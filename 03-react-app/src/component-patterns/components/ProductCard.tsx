import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

const ProductImage = ({ img = "" }) => {
  return (
    <img
      className={styles.productImg}
      src={img ? img : noImage}
      alt="ProductImage"
    />
  );
};

const ProductTittle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsProps {}

const ProductButtons = ({}: ProductButtonsProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img} />
      <ProductTittle title={product.title} />
      <ProductButtons />
    </div>
  );
};
