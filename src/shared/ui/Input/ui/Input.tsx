import { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export enum InputTheme {
  CLEAR = 'clear'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  theme?: InputTheme;
}

const Input: FC<InputProps> = (props) => {
    const { className, theme, ...additional } = props;
    return (
        <input
            className={classNames(cls.Input, {}, [className, cls[theme]])}
            {...additional}
        />
    );
};

export default Input;
