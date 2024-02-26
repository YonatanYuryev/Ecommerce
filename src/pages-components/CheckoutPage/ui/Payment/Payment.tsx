import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import CardIcon from 'shared/assets/icons/Vector.svg';
import { useTranslation } from 'react-i18next';
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
                        <img
                            className={classNames(cls.PaymentIcon)}
                            src=""
                            alt=""
                        />
                        <img
                            className={classNames(cls.PaymentIcon)}
                            src=""
                            alt=""
                        />
                        <img
                            className={classNames(cls.PaymentIcon)}
                            src=""
                            alt=""
                        />
                    </div>
                </div>
                <div className={classNames(cls.InputWrapper)}>
                    <span
                        className={classNames(cls.Label)}
                    >
                        {t('Информация о карте')}
                    </span>
                    <label htmlFor="card info">
                        <CardIcon />
                        <Input
                            className={classNames(cls.Input)}
                            id="card info"
                            theme={InputTheme.CLEAR}
                        />
                    </label>
                </div>
                <div className={classNames(cls.InputWrapper)}>
                    <label
                        className={classNames(cls.Label)}
                        htmlFor="phone"
                    >
                        {t('Номер телефона')}
                    </label>
                    <Input
                        className={classNames(cls.Input)}
                        id="phone"
                        theme={InputTheme.CLEAR}
                    />
                </div>
            </div>
        </div>
    );
};

export default Payment;
