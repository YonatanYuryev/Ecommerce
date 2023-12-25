import "./styles/index.scss";
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
import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="light">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/restore" element={<RestorePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
