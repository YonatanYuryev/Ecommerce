import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './WishesInput.module.scss';

interface WishesInputProps {
  className?: string;
}

const WishesInput: FC<WishesInputProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.WishesInputWrapper, {}, [className])}>
            <label
                className={classNames(cls.Label)}
                htmlFor="wishes"
            >
                {t('Пожелания')}
            </label>
            <textarea
                placeholder="Type your wishes"
                className={classNames(cls.WishesInput)}
                id="wishes"
            />
        </div>
    );
};

export default WishesInput;
