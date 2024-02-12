import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductsFilters.module.scss';
import CategoryFilters from '../CategoryFilters/CategoryFilters';
import PriceFilters from '../PriceFilters/PriceFilters';
import SizeFilters from '../SizeFilters/SizeFilters';
import CollectionFilters from '../CollectionFilters/CollectionFilters';
import BrandFilters from '../BrandFilters/BrandFilters';
import StyleFilters from '../StyleFilters/StyleFilters';
import SeasonFilters from '../SeasonFilters/SeasonFilters';

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
            <CollectionFilters />
            <BrandFilters />
            <StyleFilters />
            <SeasonFilters />
        </aside>
    );
};

export default ProductsFilters;
