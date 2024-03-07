import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/';

const AppRouter: FC = () => (
    <Suspense fallback={<div><PageLoader /></div>}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
