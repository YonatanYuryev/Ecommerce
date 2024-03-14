import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Summary.module.scss';
import Promo from './Promo/Promo';
import CheckoutButton from './CheckoutButton/CheckoutButton';

interface SummaryProps {
  className?: string;
}

const Summary: FC<SummaryProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Summary, {}, [className])}>
            <h4 className={classNames(cls.Title)}>{t('Краткое содержание')}</h4>
            <Promo />
            <div className={classNames(cls.Subtotal)}>
                <p>{t('Промежуточный итог')}</p>
                <span>$290.00</span>
            </div>
            <div className={classNames(cls.EstimatedShippingHandling)}>
                <p>{t('Предполагаемая доставка и обработка')}</p>
                <span>$8.00</span>
            </div>
            <div className={classNames(cls.Total)}>
                <p>{t('Итого')}</p>
                <span>$298</span>
            </div>
            <CheckoutButton />
        </div>
    );
};

export default Summary;
