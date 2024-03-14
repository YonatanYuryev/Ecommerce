import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import VectorUp from 'shared/assets/icons/VectorUp.svg';
import VectorDown from 'shared/assets/icons/VectorDown.svg';
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
                className={classNames(cls.QuantityLabel)}
            >
                {t('Количество')}
            </span>
            <div className={classNames(cls.Dropdown)}>
                <span className={classNames(cls.DefaultValue)}>1</span>
                <div className={classNames(cls.ControlsWrapper)}>
                    <div className={classNames(cls.Controls)}>
                        <VectorUp className={classNames(cls.VectorUp)} />
                        <VectorDown className={classNames(cls.VectorDown)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuantityDropdown;
