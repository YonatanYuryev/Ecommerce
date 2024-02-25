import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { Container } from 'shared/ui/Container';
import cls from './CheckoutPage.module.scss';
import Goods from '../Goods/Goods';
import Summary from '../Summary/Summary';

interface CheckoutPageProps {
  className?: string;
}

const CheckoutPage: FC<CheckoutPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.CheckoutPage, {}, [className])}>
            <Container>
                <BreadCrumbs />
                <Goods />
                <Summary />
            </Container>
        </div>
    );
};

export default CheckoutPage;
