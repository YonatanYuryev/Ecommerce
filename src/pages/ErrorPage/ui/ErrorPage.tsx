import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Страница не найдена')}</div>);
};

export default ErrorPage;
