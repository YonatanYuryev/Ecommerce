import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import cls from './Header.module.scss';
import HeaderInputs from '../HeaderInputs/HeaderInputs';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
    const { className } = props;
    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Navbar />
            <HeaderInputs />
        </header>
    );
};

export default Header;
