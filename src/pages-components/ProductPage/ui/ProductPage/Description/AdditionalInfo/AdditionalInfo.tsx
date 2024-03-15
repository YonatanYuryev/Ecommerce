import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AdditionalInfo.module.scss';

interface AdditionalInfoProps {
  className?: string;
}

const AdditionalInfo: FC<AdditionalInfoProps> = (props) => {
    const { className } = props;
    const details = 'Details';
    const detail1 = 'Standard fit for a relaxed, easy feel';
    const detail2 = 'Fabric: 100% cotton';
    const detail3 = 'Machine wash';
    const detail4 = 'Imported';
    const detail5 = 'Shown: Cactus Flower';
    const detail6 = 'Style: CU8914-564';

    return (
        <div className={classNames(cls.AdditionalInfo, {}, [className])}>
            <span className={classNames(cls.DetailTitle)}>{details}</span>
            <ul className={classNames(cls.DetailsList)}>
                <li className={classNames(cls.Detail)}>{detail1}</li>
                <li className={classNames(cls.Detail)}>{detail2}</li>
                <li className={classNames(cls.Detail)}>{detail3}</li>
                <li className={classNames(cls.Detail)}>{detail4}</li>
                <li className={classNames(cls.Detail)}>{detail5}</li>
                <li className={classNames(cls.Detail)}>{detail6}</li>
            </ul>
            <div className={classNames(cls.ShippingAndReturns)}>
                <div className={classNames(cls.Dropdown)}>{}</div>
            </div>
        </div>
    );
};

export default AdditionalInfo;
