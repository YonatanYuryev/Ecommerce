import { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Radio: FC<RadioProps> = (props) => {
    const {
        className, id, checked, disabled,
    } = props;
    return (
        <input
            type="radio"
            id={id}
            checked={checked}
            disabled={disabled}
            className={classNames(cls.Radio, {}, [className])}
        />
    );
};

export default Radio;
