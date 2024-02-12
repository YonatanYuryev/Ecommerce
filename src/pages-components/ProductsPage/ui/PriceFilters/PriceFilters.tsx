import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AngleDropdown from 'shared/assets/icons/angle-filters.svg';
import { Radio } from 'shared/ui/Radio';
import cls from './PriceFilters.module.scss';
import FilterItem from '../FilterItem/FilterItem';

interface PriceFiltersProps {
  className?: string;
}

const PriceFilters: FC<PriceFiltersProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const menu = [
        'Under 100$',
        '100$ - 200$',
        '200$ - 400$',
        '400$ - 600$',
        'Over 600$',
    ];

    return (
        <div className={classNames(cls.PriceFilters, {}, [className])}>
            <div
                className={classNames(cls.PriceTitle)}
            >
                {t('Цена')}
                <AngleDropdown />
            </div>
            <ul className={classNames(cls.PriceList)}>
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

export default PriceFilters;
