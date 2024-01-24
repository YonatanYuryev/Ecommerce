import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container';
import cls from './ProductsPage.module.scss';
import ProductsTopControls from '../ProductsTopControls/ProductsTopControls';

interface ProductsPageProps {
  className?: string;
}

const ProductsPage: FC<ProductsPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ProductsPage, {}, [className])}>
            <Container>
                <ProductsTopControls />
            </Container>
        </div>
    );
};

export default ProductsPage;
