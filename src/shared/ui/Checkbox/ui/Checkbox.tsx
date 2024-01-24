import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Checkbox.module.scss';

interface CheckboxProps {
  className?: string;
}

const Checkbox: FC<CheckboxProps> = (props) => {
    const { className, children } = props;
    return (
        <div className={classNames(cls.Checkbox, {}, [className])}>
            <label className={classNames(cls.Container, {}, [className])}>
                <input
                    type="checkbox"
                    className={classNames(cls.Input)}
                />
                <span className={classNames(cls.Checkmark)} />
            </label>
            <span>{children}</span>
        </div>
    );
};

export default Checkbox;
