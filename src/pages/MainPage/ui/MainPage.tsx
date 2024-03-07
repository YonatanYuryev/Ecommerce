import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Главная')}</div>);
};

export default MainPage;
