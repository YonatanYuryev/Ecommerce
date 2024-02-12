import { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Checkbox.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Checkbox: FC<CheckboxProps> = (props) => {
    const {
        className, checked, id, disabled,
    } = props;
    return (
        <input
            type="checkbox"
            checked={checked}
            id={id}
            disabled={disabled}
            className={classNames(cls.Checkbox, {}, [className])}
        />
    );
};

export default Checkbox;
