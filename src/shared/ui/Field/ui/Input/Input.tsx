import { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export enum InputTheme {
  CLEAR = 'clear'
}

const Input: FC<InputProps> = (props) => {
    const { className, ...additional } = props;
    return (
        <input
            className={classNames(cls.Input, {}, [className, InputTheme.CLEAR])}
            {...additional}
        />
    );
};

export default Input;
