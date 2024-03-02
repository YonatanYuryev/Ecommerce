import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AngleDropdownIcon from 'shared/assets/icons/angle-down.svg';
import cls from './ProductsDropdown.module.scss';

interface ProductsDropdownProps {
  className?: string;
  menu: string[];
}

const ProductsDropdown: FC<ProductsDropdownProps> = (props) => {
    const { className, menu } = props;
    return (
        <div className={classNames(cls.ProductsDropdown, {}, [className])}>
            <div
                className={classNames(cls.ProductsDropdownDefaultValue)}
            >
                {`By ${menu[0]}`}
                <AngleDropdownIcon />
            </div>
            <ul className={classNames(cls.ProductsDropdownList)}>
                {menu.map((item) => (
                    <li
                        className={classNames(cls.ProductsDropdownItem)}
                        key={item}
                    >
                        {item}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsDropdown;
