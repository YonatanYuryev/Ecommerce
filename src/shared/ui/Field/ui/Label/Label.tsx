import { FC, LabelHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Label.module.scss';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label: FC<LabelProps> = (props) => {
    const { className, children } = props;
    return (
        <label className={classNames(cls.Label, {}, [className])}>
            {children}
        </label>
    );
};

export default Label;
