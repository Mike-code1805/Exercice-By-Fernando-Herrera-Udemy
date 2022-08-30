import { LazyExoticComponent } from "react";
import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from "../forms/pages";
import { DynamicForm } from "../forms/pages/DynamicFormPage";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/register",
    component: RegisterPage,
    name: "Register User",
  },
  {
    path: "/formik",
    component: FormikBasicPage,
    name: "FormikBasicPage page",
  },
  {
    path: "/fyup",
    component: FormikYupPage,
    name: "FormikYupPage page",
  },
  {
    path: "/fcomponents",
    component: FormikComponents,
    name: "FormikComponents page",
  },
  {
    path: "/formikAbstraction",
    component: FormikAbstraction,
    name: "FormikAbstraction page",
  },
  {
    path: "/dynamicForm",
    component: DynamicForm,
    name: "DynamicForm page",
  },
];
