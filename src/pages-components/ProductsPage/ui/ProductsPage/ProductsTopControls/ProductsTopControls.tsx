import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { Heading } from 'shared/ui/Heading';
import cls from './ProductsTopControls.module.scss';
import ProductsDropdown from '../ProductsDropdown/ProductsDropdown';

interface ProductsTopControlsProps {
  className?: string;
}

const ProductsTopControls: FC<ProductsTopControlsProps> = (props) => {
    const { className } = props;
    const heading = 'Mens T-shirts';

    return (
        <div className={classNames(cls.ProductsTopControls, {}, [className])}>
            <div className={classNames(cls.LeftPanel)}>
                <BreadCrumbs />
                <Heading>{heading}</Heading>
            </div>
            <ProductsDropdown
                className={classNames(cls.ProductsDropdown)}
                menu={['Price', 'Alphabet', 'Size']}
            />
        </div>
    );
};

export default ProductsTopControls;
