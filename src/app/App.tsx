import './styles/index.scss';
import { FC, Suspense } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <LangSwitcher />
                <ThemeSwitcher />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
