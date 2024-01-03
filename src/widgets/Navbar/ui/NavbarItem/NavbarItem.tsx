import { FC, LiHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavbarItem.module.scss';
import { INavItem } from '../NavbarList/NavbarList.data';

interface NavbarItemProps extends LiHTMLAttributes<HTMLLIElement> {
  className?: string;
  activeItem: number;
  item: INavItem;
}

const NavbarItem: FC<NavbarItemProps> = (props) => {
    const {
        className, activeItem, item, ...additional
    } = props;
    const active = activeItem === item.id;

    return (
        <li
            className={
                classNames(
                    cls.NavbarItem,
                    {},
                    [className, active && cls.active],
                )
            }
            {...additional}
        >
            {item.title}
        </li>
    );
};

export default NavbarItem;
