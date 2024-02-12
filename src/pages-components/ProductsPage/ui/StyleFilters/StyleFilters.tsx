import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AngleDropdown from 'shared/assets/icons/angle-filters.svg';
import cls from './StyleFilters.module.scss';
import FilterItem from '../FilterItem/FilterItem';

interface StyleFiltersProps {
  className?: string;
}

const StyleFilters: FC<StyleFiltersProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const menu: string[] = [
        'All styles',
        'A-Line',
        'Graphic T-Shirts',
    ];

    return (
        <div className={classNames(cls.StyleFilters, {}, [className])}>
            <div
                className={classNames(cls.StyleTitle)}
            >
                {t('Стиль')}
                <AngleDropdown />
            </div>
            <ul className={classNames(cls.StyleList)}>
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

export default StyleFilters;
