import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { createContext, CSSProperties } from "react";
import { InitialValues, onChangeArgs } from "../interfaces/products.interfaces";
import {
  Product,
  ProductContextProps,
} from "../interfaces/products.interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children?: () => JSX.Element | null;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues
}: Props) => {
  const { counter, increaseBy, maxCount } = useProduct({ product, onChange, value, initialValues });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,         
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children!()}
      </div>
    </Provider>
  );
};
