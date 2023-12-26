import { CartPage } from "pages/CartPage";
import { CheckoutPage } from "pages/CheckoutPage";
import { ErrorPage } from "pages/ErrorPage";
import { LoginPage } from "pages/LoginPage";
import { MainPage } from "pages/MainPage";
import { ProductPage } from "pages/ProductPage";
import { ProductsPage } from "pages/ProductsPage";
import { ProfilePage } from "pages/ProfilePage";
import { RegisterPage } from "pages/RegisterPage";
import { RestorePage } from "pages/RestorePage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  PRODUCTS = "products",
  PRODUCT = "product",
  CHECKOUT = "checkout",
  PROFILE = "profile",
  CART = "cart",
  LOGIN = "login",
  REGISTER = "register",
  RESTORE = "restore",
  ERROR = "error",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PRODUCTS]: "/products",
  [AppRoutes.PRODUCT]: "/product",
  [AppRoutes.CHECKOUT]: "/checkout",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.REGISTER]: "/register",
  [AppRoutes.RESTORE]: "/restore",
  [AppRoutes.ERROR]: "/*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.PRODUCTS]: {
    path: RoutePath.products,
    element: <ProductsPage />,
  },
  [AppRoutes.PRODUCT]: {
    path: RoutePath.product,
    element: <ProductPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.CHECKOUT]: {
    path: RoutePath.checkout,
    element: <CheckoutPage />,
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <RegisterPage />,
  },
  [AppRoutes.RESTORE]: {
    path: RoutePath.restore,
    element: <RestorePage />,
  },
  [AppRoutes.ERROR]: {
    path: RoutePath.error,
    element: <ErrorPage />,
  },
};
