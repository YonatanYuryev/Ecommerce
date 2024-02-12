import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AngleDropdown from 'shared/assets/icons/angle-filters.svg';
import cls from './SeasonFilters.module.scss';
import FilterItem from '../FilterItem/FilterItem';

interface SeasonFiltersProps {
  className?: string;
}

const SeasonFilters: FC<SeasonFiltersProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const menu: string[] = [];

    return (
        <div className={classNames(cls.SeasonFilters, {}, [className])}>
            <div
                className={classNames(cls.SeasonTitle)}
            >
                {t('Сезон')}
                <AngleDropdown />
            </div>
            <ul className={classNames(cls.SeasonList)}>
                {menu.map((item) => (
                    <FilterItem
                        hasInput
                        inputType="radio"
                        key={item}
                    >
                        {item}
                    </FilterItem>
                ))}
            </ul>
        </div>
    );
};

export default SeasonFilters;
