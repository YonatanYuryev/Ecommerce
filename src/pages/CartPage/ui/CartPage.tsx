import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface CartPageProps {

}

const CartPage: FC<CartPageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Корзина')}</div>);
};

export default CartPage;
