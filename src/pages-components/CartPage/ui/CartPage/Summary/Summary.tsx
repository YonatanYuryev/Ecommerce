import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Summary.module.scss';

interface SummaryProps {
  className?: string;
}

const Summary: FC<SummaryProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Summary, {}, [className])}>
            <h4>{t('Краткое содержание')}</h4>
            <div className={classNames(cls.PromoSection)}>
                <input type="text" placeholder="Promo Code" />
                <button
                    className={classNames(cls.ApplyButton)}
                >
                    {t('Применить')}
                </button>
            </div>
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
            <button
                className={classNames(cls.CheckoutButton)}
            >
                {t('Оплатить')}
            </button>
        </div>
    );
};

export default Summary;
