import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './SubscriptionForm.module.scss';
import SubscriptionControls from '../SubscriptionControls/SubscriptionControls';

interface SubscriptionFormProps {
  className?: string;
}

const SubscriptionForm: FC<SubscriptionFormProps> = (props) => {
    const { className } = props;
    const text = 'Подпишитесь и получайте информацию о новых выпусках первыми';
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.SubscriptionForm, {}, [className])}>
            <p
                className={classNames(cls.NewsletterText)}
            >
                {t('Новостная рассылка')}

            </p>
            <h3 className={classNames(cls.SubscribeText)}>{t(text)}</h3>
            <SubscriptionControls />
        </div>
    );
};

export default SubscriptionForm;
