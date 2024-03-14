import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductPage.module.scss';

interface ProductPageProps {
  className?: string;
}

const ProductPage: FC<ProductPageProps> = (props) => {
    const { className } = props;
    return <div className={classNames(cls.ProductPage, {}, [className])}>ProductPage</div>;
};

export default ProductPage;
