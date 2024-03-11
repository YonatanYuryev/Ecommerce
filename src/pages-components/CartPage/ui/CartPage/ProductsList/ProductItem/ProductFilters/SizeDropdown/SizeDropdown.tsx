import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './SizeDropdown.module.scss';

interface SizeDropdownProps {
  className?: string;
}

const SizeDropdown: FC<SizeDropdownProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.SizeQuantity, {}, [className])}>
            <span className={classNames(cls.SizeTitle)}>{t('Размер')}</span>
            <div className={classNames(cls.Dropdown)}>{}</div>
        </div>
    );
};

export default SizeDropdown;
