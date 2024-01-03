import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ShoppingBagIcon from 'shared/assets/icons/ShoppingBag.svg';
import UserIcon from 'shared/assets/icons/User.svg';
import cls from './HeaderInputs.module.scss';

interface HeaderInputsProps {
  className?: string;
}

const HeaderInputs: FC<HeaderInputsProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.HeaderInputs, {}, [className])}>
            <input type="text" />
            <ShoppingBagIcon />
            <UserIcon />
        </div>
    );
};

export default HeaderInputs;
