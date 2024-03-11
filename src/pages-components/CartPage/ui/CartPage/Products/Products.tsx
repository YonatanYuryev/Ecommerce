import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Products.module.scss';

interface ProductsProps {
  className?: string;
}

const Products: FC<ProductsProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Products, {}, [className])}>
            <div className={classNames(cls.ProductItem)} />
            <div className={classNames(cls.ProductItem)} />
        </div>
    );
};

export default Products;
