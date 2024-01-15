import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Subscription.module.scss';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import SubscriptionImage from '../SubscriptionImage/SubscriptionImage';

interface SubscriptionProps {
  className?: string;
}

const Subscription: FC<SubscriptionProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Subscription, {}, [className])}>
            <SubscriptionForm />
            <SubscriptionImage />
        </div>
    );
};

export default Subscription;
