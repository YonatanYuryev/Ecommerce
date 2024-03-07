import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface RestorePageProps {}

const RestorePage: FC<RestorePageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Возобнавление пароля')}</div>);
};

export default RestorePage;
