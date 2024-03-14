import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import QuantityDropdown from './QuantityDropdown/QuantityDropdown';
import SizeDropdown from './SizeDropdown/SizeDropdown';
import RemoveButton from './RemoveButton/RemoveButton';
import cls from './ProductFilters.module.scss';

interface ProductFiltersProps {
  className?: string;
}

const ProductFilters: FC<ProductFiltersProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ProductFilters, {}, [className])}>
            <div className={classNames(cls.Dropdowns)}>
                <SizeDropdown />
                <QuantityDropdown />
            </div>
            <RemoveButton />
        </div>
    );
};

export default ProductFilters;
