import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AngleDropdown from 'shared/assets/icons/angle-filters.svg';
import { useTranslation } from 'react-i18next';
import cls from './CollectionFilters.module.scss';
import FilterItem from '../FilterItem/FilterItem';

interface CollectionFiltersProps {
  className?: string;
}

const CollectionFilters: FC<CollectionFiltersProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');

    const menu: string[] = [];
    return (
        <div className={classNames(cls.CollectionFilters, {}, [className])}>
            <div
                className={classNames(cls.CollectionTitle)}
            >
                {t('Коллекция')}
                <AngleDropdown />
            </div>
            <ul className={classNames(cls.CollectionList)}>
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

export default CollectionFilters;
