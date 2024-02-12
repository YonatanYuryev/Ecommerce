import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AngleDropdown from 'shared/assets/icons/angle-filters.svg';
import cls from './BrandFilters.module.scss';
import FilterItem from '../FilterItem/FilterItem';

interface BrandFiltersProps {
  className?: string;
}

const BrandFilters: FC<BrandFiltersProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const menu: string[] = [
        'Levi`s',
        'Jungmaven',
        'Sunspel',
        'Uniqlo',
        'Aime Leon Dore',
    ];

    return (
        <div className={classNames(cls.BrandFilters, {}, [className])}>
            <div
                className={classNames(cls.BrandTitle)}
            >
                {t('Бренд')}
                <AngleDropdown />
            </div>
            <ul className={classNames(cls.BrandList)}>
                {menu.map((item) => (
                    <FilterItem
                        hasInput
                        inputType="checkbox"
                        key={item}
                    >
                        {item}
                    </FilterItem>
                ))}
            </ul>
        </div>
    );
};

export default BrandFilters;
