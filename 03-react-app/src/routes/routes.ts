import { LazyExoticComponent } from "react";
import { ShoppingPage } from "../component-patterns/pages/ShoppingPage";
import { Home } from "../pages/Home";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/home",
    component: ShoppingPage,
    name: "Shopping page",
  },
  {
    path: "/about",
    component: Home,
    name: "About page",
  },
  {
    path: "/users",
    component: Home,
    name: "Users page",
  },
];
