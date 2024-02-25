import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserPanel.module.scss';

interface UserPanelProps {
  className?: string;
}

const UserPanel: FC<UserPanelProps> = (props) => {
    const { className } = props;
    return <div className={classNames(cls.UserPanel, {}, [className])}>UserPanel</div>;
};

export default UserPanel;
