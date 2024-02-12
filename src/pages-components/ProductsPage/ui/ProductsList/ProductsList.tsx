import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductItem } from 'widgets/ProductItem';
import cls from './ProductsList.module.scss';

interface ProductsListProps {
  className?: string;
}

const ProductsList: FC<ProductsListProps> = (props) => {
    const { className } = props;
    const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className={classNames(cls.ProductsList, {}, [className])}>
            <ul className={classNames(cls.ProductsMenu)}>
                {items.map((item) => (
                    <ProductItem key={item} />
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
