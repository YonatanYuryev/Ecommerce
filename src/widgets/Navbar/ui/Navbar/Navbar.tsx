import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import NavbarList from '../NavbarList/NavbarList';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <NavbarList />
        </nav>
    );
};

export default Navbar;
