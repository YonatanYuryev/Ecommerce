import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductItem.module.scss';
import ProductRate from '../ProductRate/ProductRate';
import ProductCard from '../ProductCard/ProductCard';
import ProductInfo from '../ProductInfo/ProductInfo';

interface ProductItemProps {
  className?: string;
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const { className } = props;
    const title = 'Basic t-shirt';
    return (
        <div className={classNames(cls.ProductItem, {}, [className])}>
            <ProductCard />
            <ProductRate cardId={1} onClickProduct={() => {}} />
            <ProductInfo price={35} title={title} id={7144} />
        </div>
    );
};

export default ProductItem;
