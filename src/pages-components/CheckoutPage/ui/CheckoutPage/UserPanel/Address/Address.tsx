import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { useTranslation } from 'react-i18next';
import { Radio } from 'shared/ui/Radio';
import cls from './Address.module.scss';
import InputsList from './InputsList/InputsList';

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
            <InputsList />
        </div>
    );
};

export default Address;
