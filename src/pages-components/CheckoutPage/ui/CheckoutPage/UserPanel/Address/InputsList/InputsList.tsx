import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './InputsList.module.scss';
import AddressInput from './AddressInput/AddressInput';
import WishesInput from './WishesInput/WishesInput';
import RadioInput from './RadioInput/RadioInput';
import DefaultInput from './DefaultInput/DefaultInput';

interface InputsListProps {
  className?: string;
}

const InputsList: FC<InputsListProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.InputsList, {}, [className])}>
            <DefaultInput id="country" text="Страна" />
            <DefaultInput id="ZIP code" text="Почтовый индекс" />
            <div className={classNames(cls.RadioInputs)}>
                <RadioInput
                    id="Standart"
                    text="Стандарт"
                />
                <RadioInput
                    id="Premium"
                    text="Премиум"
                />
            </div>
            <AddressInput />
            <WishesInput />
        </div>
    );
};

export default InputsList;
