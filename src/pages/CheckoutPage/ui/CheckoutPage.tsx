import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface CheckoutPageProps {

}

const CheckoutPage: FC<CheckoutPageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Оплата')}</div>);
};

export default CheckoutPage;
