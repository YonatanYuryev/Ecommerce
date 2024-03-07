import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import PaypalIcon from 'shared/assets/icons/payment/PayPal.svg';
import VisaIcon from 'shared/assets/icons/payment/visa-logo.svg';
import MastercardIcon from 'shared/assets/icons/payment/Mastercard.svg';
import cls from './PaymentMethods.module.scss';

interface PaymentMethodsProps {
  className?: string;
}

const PaymentMethods: FC<PaymentMethodsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const icons = [
        {
            icon: <VisaIcon />,
        },
        {
            icon: <MastercardIcon />,
        },
        {
            icon: <PaypalIcon />,
        },
    ];

    return (
        <div className={classNames(cls.PaymentInputs, {}, [className])}>
            <span
                className={classNames(cls.Label)}
            >
                {t('Способ оплаты')}
            </span>
            <div className={classNames(cls.PaymentMethodIcons)}>
                {icons.map(({ icon }) => (
                    <div className={classNames(cls.PaymentIcon)}>{icon}</div>
                ))}
            </div>
        </div>
    );
};

export default PaymentMethods;
