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
            <h3 className={classNames(cls.Title)}>{t('Краткое содержание')}</h3>
            <div className={classNames(cls.Subtotal)}>
                <p className={classNames(cls.Label)}>
                    {t('Промежуточный итог')}
                </p>
                <span className={classNames(cls.Price)}>$290.00</span>
            </div>
            <div className={classNames(cls.EstimatedShippingHandling)}>
                <p className={classNames(cls.Label)}>
                    {t('Предполагаемая доставка и обработка')}
                </p>
                <span className={classNames(cls.Price)}>$8.00</span>
            </div>
            <div className={classNames(cls.Promocode)}>
                <p className={classNames(cls.Label)}>{t('Промо-код')}</p>
                <span className={classNames(cls.Price)}>-$50.00</span>
            </div>
            <div className={classNames(cls.Total)}>
                <p className={classNames(cls.Label)}>{t('Итого')}</p>
                <span className={classNames(cls.Price)}>$248</span>
            </div>
        </div>
    );
};

export default Summary;
