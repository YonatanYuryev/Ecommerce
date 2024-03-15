import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainInfo.module.scss';

interface MainInfoProps {
  className?: string;
}

const MainInfo: FC<MainInfoProps> = (props) => {
    const { className } = props;
    const title = 'Basic T-shirt';
    const description = 'The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest.';

    return (
        <div className={classNames(cls.MainInfo, {}, [className])}>
            <span className={classNames(cls.Sale)}>-15%</span>
            <h4 className={classNames(cls.Title)}>{title}</h4>
            <p>{description}</p>
            <span className={classNames(cls.Price)}>$35</span>
        </div>
    );
};

export default MainInfo;
