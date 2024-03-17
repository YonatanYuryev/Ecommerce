import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Image1 from 'shared/assets/icons/item-color1.png';
import Image2 from 'shared/assets/icons/item-color2.png';
import Image3 from 'shared/assets/icons/item-color3.png';
import Image4 from 'shared/assets/icons/item-color4.png';
import cls from './Colors.module.scss';

interface ColorsProps {
  className?: string;
}

const Colors: FC<ColorsProps> = (props) => {
    const { className } = props;
    return (
        <ul className={classNames(cls.Colors, {}, [className])}>
            <li className={classNames(cls.ColorItem)}>
                <img src={Image1} alt="I" />
            </li>
            <li className={classNames(cls.ColorItem)}>
                <img src={Image2} alt="I" />
            </li>
            <li className={classNames(cls.ColorItem)}>
                <img src={Image3} alt="I" />
            </li>
            <li className={classNames(cls.ColorItem)}>
                <img src={Image4} alt="I" />
            </li>
        </ul>
    );
};

export default Colors;
