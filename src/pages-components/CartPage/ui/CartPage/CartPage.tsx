import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { useTranslation } from 'react-i18next';
import cls from './CartPage.module.scss';
import Summary from './Summary/Summary';
import Products from './ProductsList/ProductsList';

interface CartPageProps {
  className?: string;
}

const CartPage: FC<CartPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <Container>
                <BreadCrumbs className={classNames(cls.Breadcrumbs)} />
                <h2 className={classNames(cls.CartTitle)}>{t('Корзина')}</h2>
                <div className={classNames(cls.CartContent)}>
                    <Products />
                    <Summary />
                </div>
            </Container>
        </div>
    );
};

export default CartPage;
