import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Image from 'shared/assets/test-products/img2.png';
import ProductFilters from './ProductFilters/ProductFilters';
import cls from './ProductItem.module.scss';

interface ProductItemProps {
  className?: string;
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const { className } = props;
    const title = 'Basic t-shirt';
    const color = 'Black with print';

    return (
        <div className={classNames(cls.ProductItem, {}, [className])}>
            <img
                src={Image}
                alt=""
                className={classNames(cls.Image)}
            />
            <div className={classNames(cls.Info)}>
                <div className={classNames(cls.Id)}>#7777</div>
                <div>
                    <p className={classNames(cls.Title)}>{title}</p>
                    <span className={classNames(cls.Price)}>$35</span>
                </div>
                <p className={classNames(cls.Color)}>{color}</p>
                <ProductFilters />
            </div>
        </div>
    );
};

export default ProductItem;
