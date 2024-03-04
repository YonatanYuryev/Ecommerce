import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AngleDropdown from 'shared/assets/icons/angle-filters.svg';
import cls from './CategoryFilters.module.scss';
import FilterItem from '../FilterItem/FilterItem';

interface CategoryFiltersProps {
  className?: string;
}

const CategoryFilters: FC<CategoryFiltersProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const menu = [
        'All',
        'Coats & Jackets',
        'T-shirts',
        'Tops',
        'Trousers',
        'Jumpsuits & Rompers',
        'Pants',
        'Shorts',
        'Sweaters',
        'Shoes',
    ];

    return (
        <div className={classNames(cls.CategoryFilters, {}, [className])}>
            <div
                className={classNames(cls.CategoryTitle)}
            >
                {t('Категория')}
                <AngleDropdown />
            </div>
            <ul className={classNames(cls.CategoryList)}>
                {menu.map((item) => (
                    <FilterItem
                        hasInput={false}
                        key={item}
                    >
                        {item}
                    </FilterItem>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFilters;
