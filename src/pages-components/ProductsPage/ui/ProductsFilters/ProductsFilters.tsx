import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductsFilters.module.scss';
import CategoryFilters from '../CategoryFilters/CategoryFilters';
import PriceFilters from '../PriceFilters/PriceFilters';
import SizeFilters from '../SizeFilters/SizeFilters';

interface ProductsFiltersProps {
  className?: string;
}

const ProductsFilters: FC<ProductsFiltersProps> = (props) => {
    const { className } = props;
    return (
        <aside className={classNames(cls.ProductsFilters, {}, [className])}>
            <CategoryFilters />
            <PriceFilters />
            <SizeFilters />
        </aside>
    );
};

export default ProductsFilters;
