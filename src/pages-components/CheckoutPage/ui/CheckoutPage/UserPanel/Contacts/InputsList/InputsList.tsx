import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './InputsList.module.scss';
import DefaultInput from './DefaultInput/DefaultInput';

interface InputsListProps {
  className?: string;
}

const InputsList: FC<InputsListProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.InputsList, {}, [className])}>
            <DefaultInput id="first name" text="Имя" />
            <DefaultInput id="second name" text="Фамилия" />
            <DefaultInput id="email" text="Электронная почта" />
            <DefaultInput id="phone" text="Номер телефона" />
        </div>
    );
};

export default InputsList;
