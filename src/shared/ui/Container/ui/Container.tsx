import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Container.module.scss';

interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = (props) => {
    const { className, children } = props;
    return (
        <div className={classNames(cls.Container, {}, [className])}>
            {children}
        </div>
    );
};

export default Container;
