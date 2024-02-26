import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserPanel.module.scss';
import Contacts from '../Contacts/Contacts';
import Address from '../Address/Address';

interface UserPanelProps {
  className?: string;
}

const UserPanel: FC<UserPanelProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.UserPanel, {}, [className])}>
            <Contacts />
            <Address />
        </div>
    );
};

export default UserPanel;
