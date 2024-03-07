import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductInfo.module.scss';

interface ProductInfoProps {
  className?: string;
  id: number;
  title: string;
  price: number;
}

const ProductInfo: FC<ProductInfoProps> = (props) => {
    const {
        className, id, title, price,
    } = props;

    return (
        <div className={classNames(cls.ProductInfo, {}, [className])}>
            <div className={classNames(cls.ProductId)}>
                #
                {id}
            </div>
            <div className={classNames(cls.ProductAdditional)}>
                <div className={classNames(cls.ProductTitle)}>{title}</div>
                <div className={classNames(cls.ProductPrice)}>
                    $
                    {price}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
