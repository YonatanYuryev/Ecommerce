import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Логин')}</div>);
};

export default LoginPage;
