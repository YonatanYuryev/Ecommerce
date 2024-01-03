import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LogoIcon from 'shared/assets/icons/LOGO.svg';
import cls from './NavbarList.module.scss';
import list, { INavItem } from './NavbarList.data';
import NavbarItem from '../NavbarItem/NavbarItem';

interface NavbarListProps {
  className?: string;
}

const NavbarList: FC<NavbarListProps> = (props) => {
    const { className } = props;
    const [activeItem, setActiveItem] = useState<number>(list[0].id);
    const onClickNavbarItem = (id: number) => setActiveItem(id);

    return (
        <ul className={classNames(cls.NavbarList, {}, [className])}>
            <li className={cls.menuItem}>
                <LogoIcon />
            </li>
            {list.map((item: INavItem) => (
                <NavbarItem
                    key={item.id}
                    item={item}
                    activeItem={activeItem}
                    onClick={() => onClickNavbarItem(item.id)}
                />
            ))}
        </ul>
    );
};

export default NavbarList;
