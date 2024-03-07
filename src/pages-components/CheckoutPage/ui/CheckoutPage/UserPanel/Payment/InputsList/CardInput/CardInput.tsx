import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import CardIcon from 'shared/assets/icons/Vector.svg';
import { useTranslation } from 'react-i18next';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import cls from './CardInput.module.scss';

interface CardInputProps {
  className?: string;
}

const CardInput: FC<CardInputProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <label
                htmlFor="card info"
                className={classNames(cls.Label)}
            >
                {t('Информация о карте')}
            </label>
            <label
                htmlFor="card info"
                className={classNames(cls.FieldWrapper)}
            >
                <CardIcon />
                <Input
                    placeholder="0000&nbsp;0000&nbsp;0000&nbsp;0000&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;MM&nbsp;/&nbsp;YY&nbsp;&nbsp;&nbsp;&nbsp;CVV"
                    className={classNames(cls.Input)}
                    id="card info"
                    theme={InputTheme.CLEAR}
                />
            </label>
        </div>
    );
};

export default CardInput;
