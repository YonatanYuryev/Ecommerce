import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { useTranslation } from 'react-i18next';
import cls from './Contacts.module.scss';
import InputsList from './InputsList/InputsList';

interface ContactsProps {
  className?: string;
}

const Contacts: FC<ContactsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Contacts, {}, [className])}>
            <div className={classNames(cls.TitleWrapper)}>
                <h3 className={classNames(cls.Title)}>{t('Контакты')}</h3>
                <div className={classNames(cls.Stick)} />
            </div>
            <InputsList />
        </div>
    );
};

export default Contacts;
