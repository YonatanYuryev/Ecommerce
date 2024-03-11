import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './CheckoutButton.module.scss';

interface CheckoutButtonProps {
  className?: string;
}

const CheckoutButton: FC<CheckoutButtonProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.CheckoutButton, {}, [className])}
        >
            {t('Оплатить')}
        </Button>
    );
};

export default CheckoutButton;
