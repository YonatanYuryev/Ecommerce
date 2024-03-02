import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import CardIcon from 'shared/assets/icons/Vector.svg';
import { useTranslation } from 'react-i18next';
import PaypalIcon from 'shared/assets/icons/payment/PayPal.svg';
import VisaIcon from 'shared/assets/icons/payment/visa-logo.svg';
import MastercardIcon from 'shared/assets/icons/payment/Mastercard.svg';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './Payment.module.scss';

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
            <div className={classNames(cls.InputsList)}>
                <div className={classNames(cls.PaymentInputs)}>
                    <span
                        className={classNames(cls.Label)}
                    >
                        {t('Способ оплаты')}
                    </span>
                    <div className={classNames(cls.PaymentMethodIcons)}>
                        <div
                            className={classNames(cls.PaymentIcon)}
                        >
                            <VisaIcon />
                        </div>
                        <div
                            className={classNames(cls.PaymentIcon)}
                        >
                            <MastercardIcon />
                        </div>
                        <div
                            className={classNames(cls.PaymentIcon)}
                        >
                            <PaypalIcon />
                        </div>
                    </div>
                </div>
                <div className={classNames(cls.InputWrapper)}>
                    <label
                        htmlFor="card info"
                        className={classNames(cls.Label)}
                    >
                        {t('Информация о карте')}
                    </label>
                    <label
                        htmlFor="card info"
                        className={classNames(cls.FieldWrapper)}
                    >
                        <CardIcon />
                        <Input
                            placeholder="0000&nbsp;0000&nbsp;0000&nbsp;0000&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;MM&nbsp;/&nbsp;YY&nbsp;&nbsp;&nbsp;&nbsp;CVV"
                            className={classNames(cls.Input)}
                            id="card info"
                            theme={InputTheme.CLEAR}
                        />
                    </label>
                </div>
                <Button
                    theme={ThemeButton.CLEAR}
                    className={classNames(cls.PurchaseButton)}
                >
                    <p>{t('Купить за')}</p>
                    <p>$248</p>
                </Button>
            </div>
        </div>
    );
};

export default Payment;
