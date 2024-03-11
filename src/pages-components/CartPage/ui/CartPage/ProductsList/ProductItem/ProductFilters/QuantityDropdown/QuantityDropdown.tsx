import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './QuantityDropdown.module.scss';

interface QuantityDropdownProps {
  className?: string;
}

const QuantityDropdown: FC<QuantityDropdownProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.QuantityDropdown, {}, [className])}>
            <span
                className={classNames(cls.QuantityTitle)}
            >
                {t('Количество')}
            </span>
            <div className={classNames(cls.Dropdown)} />
        </div>
    );
};

export default QuantityDropdown;
