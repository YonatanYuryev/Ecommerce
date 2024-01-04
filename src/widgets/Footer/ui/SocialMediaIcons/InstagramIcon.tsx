import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import InstagramImg from 'shared/assets/icons/Instagram.svg';
import cls from './SocialMediaIcon.module.scss';

interface InstagramIconProps {
  className?: string;
}

const InstagramIcon: FC<InstagramIconProps> = (props) => {
    const { className } = props;
    return (
        <i className={classNames(cls.InstagramIcon, {}, [className])}>
            <InstagramImg />
        </i>
    );
};

export default InstagramIcon;
