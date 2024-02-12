import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Heading.module.scss';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

const Heading: FC<HeadingProps> = (props) => {
    const { className, children } = props;
    return (
        <h2 className={classNames(cls.Heading, {}, [className])}>
            {children}
        </h2>
    );
};

export default Heading;
