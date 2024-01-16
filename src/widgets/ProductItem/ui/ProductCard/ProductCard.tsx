import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import AddToCartIcon from 'shared/assets/icons/AddToCart.svg';
import ProductPicture from 'shared/assets/test-products/img1.png';
import cls from './ProductCard.module.scss';
import ProductButton from '../ProductButton/ProductButton';

interface ProductCardProps {
  className?: string;
}

const ProductCard: FC<ProductCardProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ProductCard, {}, [className])}>
            <span className={classNames(cls.ProductSale)}>-10%</span>
            <img
                className={classNames(cls.ProductImage)}
                src={ProductPicture}
                alt=""
            />
            <ProductButton onClick={() => {}} isAdded={false} />
        </div>
    );
};

export default ProductCard;
