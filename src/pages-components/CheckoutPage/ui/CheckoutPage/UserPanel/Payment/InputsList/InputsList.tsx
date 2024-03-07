import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './InputsList.module.scss';
import PaymentMethods from './PaymentMethods/PaymentMethods';
import CardInput from './CardInput/CardInput';
import PurchaseButton from './PurchaseButton/PurchaseButton';

interface InputsListProps {
  className?: string;
}

const InputsList: FC<InputsListProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.InputsList, {}, [className])}>
            <PaymentMethods />
            <CardInput />
            <PurchaseButton />
        </div>
    );
};

export default InputsList;
