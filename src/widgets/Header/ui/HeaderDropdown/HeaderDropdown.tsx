import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HeaderDropdown.module.scss';

interface HeaderDropdownProps {
  className?: string;
}

const HeaderDropdown: FC<HeaderDropdownProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.HeaderDropdown, {}, [className])}>
            <div />
            <div />
            <div />
        </div>
    );
};

export default HeaderDropdown;
