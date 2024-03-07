import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum TypeAppLink {
  FOOTER_MAIN = 'FooterMainLink',
  FOOTER_CHILD = 'FooterChildLink',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  type?: TypeAppLink;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className, to, children, type, ...additional
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[type]])}
            {...additional}
        >
            {children}
        </Link>
    );
};

export default AppLink;
