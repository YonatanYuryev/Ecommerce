import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductsList.module.scss';
import ProductItem from './ProductItem/ProductItem';

interface ProductsListProps {
  className?: string;
}

const ProductsList: FC<ProductsListProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ProductsList, {}, [className])}>
            <ProductItem />
        </div>
    );
};

export default ProductsList;
