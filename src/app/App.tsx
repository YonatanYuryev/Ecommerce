import './styles/index.scss';
import { FC, Suspense } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { RegisterPage } from 'pages-components/RegisterPage';
import LoginPage from 'pages-components/LoginPage/ui/LoginPage/LoginPage';
import { RestorePage } from 'pages-components/RestorePage';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header />
                <LangSwitcher />
                <ThemeSwitcher />
                <AppRouter />
                {/* <RegisterPage /> */}
                {/* <LoginPage /> */}
                <RestorePage />
                <Footer />
            </Suspense>
        </div>
    );
};

export default App;
