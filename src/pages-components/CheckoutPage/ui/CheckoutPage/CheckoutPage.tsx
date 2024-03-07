import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { Container } from 'shared/ui/Container';
import cls from './CheckoutPage.module.scss';
import UserPanel from './UserPanel/UserPanel';
import ProductsPanel from './ProductsPanel/ProductsPanel';

interface CheckoutPageProps {
  className?: string;
}

const CheckoutPage: FC<CheckoutPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.CheckoutPage, {}, [className])}>
            <Container className={classNames(cls.ContentContainer)}>
                <BreadCrumbs className={classNames(cls.Breadcrumbs)} />
                <ProductsPanel className={classNames(cls.ProductsInfoPanel)} />
                <UserPanel className={classNames(cls.UserPanel)} />
            </Container>
        </div>
    );
};

export default CheckoutPage;
