import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useLocation } from 'react-router-dom';
import cls from './BreadCrumbs.module.scss';

interface BreadCrumbsProps {
  className?: string;
}

const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
    const { className } = props;
    const location = useLocation();

    return (
        <div className={classNames(cls.BreadCrumbs, {}, [className])}>
            <ul className={classNames(cls.BreadCrumbsList)}>
                <li
                    className={classNames(cls.BreadCrumbsItem)}
                >
                    {location.pathname.substring(1)}

                </li>
                <li
                    className={classNames(cls.BreadCrumbsSlash)}
                >
                    /

                </li>
                <li
                    className={classNames(cls.BreadCrumbsItem)}
                >
                    {location.search.substring(1)}

                </li>
            </ul>
        </div>
    );
};

export default BreadCrumbs;
