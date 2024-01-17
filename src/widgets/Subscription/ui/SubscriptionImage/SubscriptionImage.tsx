import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ShoesImage from 'shared/assets/icons/ShoesSubscribeImage.png';
import cls from './SubscriptionImage.module.scss';

interface SubscriptionImageProps {
  className?: string;
}

const SubscriptionImage: FC<SubscriptionImageProps> = (props) => {
    const { className } = props;
    return (
        <img
            className={classNames(cls.SubscriptionImage, {}, [className])}
            src={ShoesImage}
            alt="S"
        />
    );
};

export default SubscriptionImage;
