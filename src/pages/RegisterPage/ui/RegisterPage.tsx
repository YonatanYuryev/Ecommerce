import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Регистрация')}</div>);
};

export default RegisterPage;
