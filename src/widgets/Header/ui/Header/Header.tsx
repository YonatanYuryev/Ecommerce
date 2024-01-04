import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import cls from './Header.module.scss';
import HeaderControls from '../HeaderControls/HeaderControls';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
    const { className } = props;
    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Navbar />
            <HeaderControls />
        </header>
    );
};

export default Header;
