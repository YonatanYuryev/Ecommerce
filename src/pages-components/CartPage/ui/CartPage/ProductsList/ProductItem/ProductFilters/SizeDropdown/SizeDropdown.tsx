import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Angle from 'shared/assets/icons/angle-down.svg';
import cls from './SizeDropdown.module.scss';

interface SizeDropdownProps {
  className?: string;
}

const SizeDropdown: FC<SizeDropdownProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const label = 'L / 14 US';

    return (
        <div className={classNames(cls.SizeQuantity, {}, [className])}>
            <span className={classNames(cls.SizeLabel)}>{t('Размер')}</span>
            <div className={classNames(cls.Dropdown)}>
                <div className={classNames(cls.DefaultItem)}>
                    <span className={classNames(cls.Label)}>{label}</span>
                    <Angle />
                </div>
            </div>
        </div>
    );
};

export default SizeDropdown;
