import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Angle from 'shared/assets/icons/angle-down.svg';
import cls from './ShippingAndReturns.module.scss';

interface ShippingAndReturnsProps {
  className?: string;
}

const ShippingAndReturns: FC<ShippingAndReturnsProps> = (props) => {
    const { className } = props;
    const shippingAndReturns = 'Shipping & Returns';

    return (
        <div className={classNames(cls.ShippingAndReturns, {}, [className])}>
            <span className={classNames(cls.ShippingAndReturnsTitle)}>
                {shippingAndReturns}
                <Angle
                    className={classNames(cls.ShippingAndReturnsAngleDown)}
                />
            </span>
        </div>
    );
};

export default ShippingAndReturns;
