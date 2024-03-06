import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import CardIcon from 'shared/assets/icons/Vector.svg';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './Payment.module.scss';
import PaymentMethods from './InputsList/PaymentMethods/PaymentMethods';
import InputsList from './InputsList/InputsList';

interface PaymentProps {
  className?: string;
}

const Payment: FC<PaymentProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Payment, {}, [className])}>
            <div className={classNames(cls.TitleWrapper)}>
                <h3 className={classNames(cls.Title)}>{t('Оплата')}</h3>
                <div className={classNames(cls.Stick)} />
            </div>
            <InputsList />
        </div>
    );
};

export default Payment;
