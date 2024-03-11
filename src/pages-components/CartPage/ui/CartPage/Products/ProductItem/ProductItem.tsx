import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductItem.module.scss';

interface ProductItemProps {
  className?: string;
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ProductItem, {}, [className])}>
            <img src="" alt="" />
            <div />
        </div>
    );
};

export default ProductItem;
