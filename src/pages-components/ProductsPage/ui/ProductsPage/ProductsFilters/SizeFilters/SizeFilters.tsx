import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AngleDropdown from 'shared/assets/icons/angle-filters.svg';
import cls from './SizeFilters.module.scss';
import FilterItem from '../FilterItem/FilterItem';

interface SizeFiltersProps {
  className?: string;
}

const SizeFilters: FC<SizeFiltersProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const menu = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL',
    ];

    return (
        <div className={classNames(cls.SizeFilters, {}, [className])}>
            <div
                className={classNames(cls.SizeTitle)}
            >
                {t('Размер')}
                <AngleDropdown />
            </div>
            <ul className={classNames(cls.SizeList)}>
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

export default SizeFilters;
