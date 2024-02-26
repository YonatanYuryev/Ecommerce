import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { useTranslation } from 'react-i18next';
import cls from './Contacts.module.scss';

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
            <div className={classNames(cls.InputsList)}>
                <div className={classNames(cls.InputWrapper)}>
                    <label
                        className={classNames(cls.Label)}
                        htmlFor="first name"
                    >
                        {t('Имя')}
                    </label>
                    <Input
                        className={classNames(cls.Input)}
                        id="first name"
                        theme={InputTheme.CLEAR}
                    />
                </div>
                <div className={classNames(cls.InputWrapper)}>
                    <label
                        className={classNames(cls.Label)}
                        htmlFor="second name"
                    >
                        {t('Фамилия')}
                    </label>
                    <Input
                        className={classNames(cls.Input)}
                        id="second name"
                        theme={InputTheme.CLEAR}
                    />
                </div>
                <div className={classNames(cls.InputWrapper)}>
                    <label
                        className={classNames(cls.Label)}
                        htmlFor="email"
                    >
                        {t('Электронная почта')}
                    </label>
                    <Input
                        className={classNames(cls.Input)}
                        id="email"
                        theme={InputTheme.CLEAR}
                    />
                </div>
                <div className={classNames(cls.InputWrapper)}>
                    <label
                        className={classNames(cls.Label)}
                        htmlFor="phone"
                    >
                        {t('Номер телефона')}
                    </label>
                    <Input
                        className={classNames(cls.Input)}
                        id="phone"
                        theme={InputTheme.CLEAR}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
