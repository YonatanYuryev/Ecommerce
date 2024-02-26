import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { useTranslation } from 'react-i18next';
import { Radio } from 'shared/ui/Radio';
import cls from './Address.module.scss';

interface AddressProps {
  className?: string;
}

const Address: FC<AddressProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Address, {}, [className])}>
            <div className={classNames(cls.TitleWrapper)}>
                <h3 className={classNames(cls.Title)}>{t('Адрес')}</h3>
                <div className={classNames(cls.Stick)} />
            </div>
            <div className={classNames(cls.InputsList)}>
                <div className={classNames(cls.InputWrapper)}>
                    <label
                        className={classNames(cls.Label)}
                        htmlFor="country"
                    >
                        {t('Страна')}
                    </label>
                    <Input
                        className={classNames(cls.Input)}
                        id="country"
                        theme={InputTheme.CLEAR}
                    />
                </div>
                <div className={classNames(cls.InputWrapper)}>
                    <label
                        className={classNames(cls.Label)}
                        htmlFor="ZIP code"
                    >
                        {t('Почтовый индекс')}
                    </label>
                    <Input
                        className={classNames(cls.Input)}
                        id="ZIP code"
                        theme={InputTheme.CLEAR}
                    />
                </div>
                <div className={classNames(cls.RadioInputs)}>
                    <div className={classNames(cls.RadioInputWrapper)}>
                        <Radio id="Standart" />
                        <label
                            className={
                                classNames(cls.Label, {}, [cls.RadioLabel])
                            }
                            htmlFor="Standart"
                        >
                            {t('Стандарт')}
                        </label>
                    </div>
                    <div
                        className={classNames(cls.RadioInputWrapper)}
                    >
                        <Radio id="Premium" />
                        <label
                            className={
                                classNames(cls.Label, {}, [cls.RadioLabel])
                            }
                            htmlFor="Premium"
                        >
                            {t('Премиум')}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
