import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AngleDropdown from 'shared/assets/icons/angle-filters.svg';
import cls from './SizeFilters.module.scss';

interface SizeFiltersProps {
  className?: string;
}

const SizeFilters: FC<SizeFiltersProps> = (props) => {
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
        <div className={classNames(cls.SizeFilters, {}, [className])}>
            <div
                className={classNames(cls.SizeTitle)}
            >
                {t('Размер')}
                <AngleDropdown />
            </div>
            <ul className={classNames(cls.SizeList)}>
                {menu.map((item) => (
                    <li
                        className={classNames(cls.SizeItem)}
                        key={item}
                    >
                        {item}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SizeFilters;
