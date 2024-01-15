import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './SubscriptionControls.module.scss';
import SubscriptionInput from '../SubscriptionInput/SubscriptionInput';

interface SubscriptionControlsProps {
  className?: string;
}

const SubscriptionControls: FC<SubscriptionControlsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.SubscriptionControls, {}, [className])}>
            <SubscriptionInput />
            <Button
                className={classNames(cls.SubscribeButton)}
                theme={ThemeButton.CLEAR}
            >
                {t('Подписаться')}

            </Button>
        </div>
    );
};

export default SubscriptionControls;
