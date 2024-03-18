import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Details.module.scss';

interface DetailsProps {
  className?: string;
}

const Details: FC<DetailsProps> = (props) => {
    const { className } = props;
    const detail1 = 'Standard fit for a relaxed, easy feel';
    const detail2 = 'Fabric: 100% cotton';
    const detail3 = 'Machine wash';
    const detail4 = 'Imported';
    const detail5 = 'Shown: Cactus Flower';
    const detail6 = 'Style: CU8914-564';

    return (
        <ul className={classNames(cls.Details, {}, [className])}>
            <li className={classNames(cls.Detail)}>{detail1}</li>
            <li className={classNames(cls.Detail)}>{detail2}</li>
            <li className={classNames(cls.Detail)}>{detail3}</li>
            <li className={classNames(cls.Detail)}>{detail4}</li>
            <li className={classNames(cls.Detail)}>{detail5}</li>
            <li className={classNames(cls.Detail)}>{detail6}</li>
        </ul>
    );
};

export default Details;
