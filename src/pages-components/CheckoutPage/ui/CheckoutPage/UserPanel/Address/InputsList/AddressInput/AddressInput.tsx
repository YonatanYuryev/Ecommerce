import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { useTranslation } from 'react-i18next';
import cls from './AddressInput.module.scss';

interface AddressInputProps {
  className?: string;
}

const AddressInput: FC<AddressInputProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.AddressInputWrapper, {}, [className])}>
            <div className={classNames(cls.AddressInputUpperSection)}>
                <label
                    className={classNames(cls.Label)}
                    htmlFor="address"
                >
                    {t('Адрес')}
                </label>
                <p
                    className={classNames(cls.ChooseOnMap)}
                >
                    {t('Выбрать на карте')}
                </p>
            </div>
            <Input
                className={classNames(cls.AddressInput)}
                id="address"
                theme={InputTheme.CLEAR}
            />
        </div>
    );
};

export default AddressInput;
