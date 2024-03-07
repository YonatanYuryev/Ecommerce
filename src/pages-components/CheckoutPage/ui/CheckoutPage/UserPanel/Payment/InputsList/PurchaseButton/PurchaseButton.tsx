import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './PurchaseButton.module.scss';

interface PurchaseButtonProps {
  className?: string;
}

const PurchaseButton: FC<PurchaseButtonProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.PurchaseButton, {}, [className])}
        >
            <p>{t('Купить за')}</p>
            <p>$248</p>
        </Button>
    );
};

export default PurchaseButton;
