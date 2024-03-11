import './styles/index.scss';
import { FC, Suspense } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { CheckoutPage } from 'pages-components/CheckoutPage';
import { ProductsPage } from 'pages-components/ProductsPage';
import { CartPage } from 'pages-components/CartPage';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header />
                {/* <LangSwitcher /> */}
                {/* <ThemeSwitcher /> */}
                {/* <AppRouter /> */}
                {/* <CheckoutPage /> */}
                {/* <ProductsPage /> */}
                <CartPage />
                <Footer />
            </Suspense>
        </div>
    );
};

export default App;
