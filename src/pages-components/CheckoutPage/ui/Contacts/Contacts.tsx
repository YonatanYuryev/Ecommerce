import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import cls from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

const Contacts: FC<ContactsProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Contacts, {}, [className])}>
            <div className={classNames(cls.TitleWrapper)}>
                <h3 className={classNames(cls.Title)}>{}</h3>
            </div>
            <div className={classNames(cls.InputsList)}>
                <div>
                    <label htmlFor="" />
                    <Input theme={InputTheme.CLEAR} />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
