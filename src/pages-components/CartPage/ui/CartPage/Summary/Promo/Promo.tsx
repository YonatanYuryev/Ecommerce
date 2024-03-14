import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './Promo.module.scss';

interface PromoProps {
  className?: string;
}

const Promo: FC<PromoProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(cls.Promo, {}, [className])}>
            <Input
                className={classNames(cls.PromoInput)}
                theme={InputTheme.CLEAR}
                type="text"
                placeholder="Promo Code"
            />
            <Button
                theme={ThemeButton.CLEAR}
                className={classNames(cls.ApplyButton)}
            >
                {t('Применить')}
            </Button>
        </div>
    );
};

export default Promo;
