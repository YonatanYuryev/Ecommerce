import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Angle from 'shared/assets/icons/angle-down.svg';
import cls from './AdditionalInfo.module.scss';
import Details from './Details/Details';
import ShippingAndReturns from './ShippingAndReturns/ShippingAndReturns';

interface AdditionalInfoProps {
  className?: string;
}

const AdditionalInfo: FC<AdditionalInfoProps> = (props) => {
    const { className } = props;
    const details = 'Details';

    return (
        <div className={classNames(cls.AdditionalInfo, {}, [className])}>
            <span className={classNames(cls.DetailTitle)}>
                {details}
                <Angle className={classNames(cls.DeatilsAngleDown)} />
            </span>
            <Details />
            <ShippingAndReturns />
        </div>
    );
};

export default AdditionalInfo;
