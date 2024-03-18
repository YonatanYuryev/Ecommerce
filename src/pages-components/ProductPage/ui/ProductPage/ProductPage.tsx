import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { AlsoLike } from 'widgets/AlsoLike';
import { Pagination } from 'widgets/Pagination';
import { Subscription } from 'widgets/Subscription';
import cls from './ProductPage.module.scss';
import Gallery from './Gallery/Gallery';
import Description from './Description/Description';

interface ProductPageProps {
  className?: string;
}

const ProductPage: FC<ProductPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ProductPage, {}, [className])}>
            <Container>
                <BreadCrumbs className={classNames(cls.Breadcrumbs)} />
                <div className={classNames(cls.MainContent)}>
                    <Gallery />
                    <Description />
                </div>
                <AlsoLike />
                <Pagination className={classNames(cls.Pagination)} />
            </Container>
            <Subscription />
        </div>
    );
};

export default ProductPage;
