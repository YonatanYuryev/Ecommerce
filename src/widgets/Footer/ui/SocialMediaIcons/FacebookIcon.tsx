import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import FacebookImg from 'shared/assets/icons/Facebook.svg';
import cls from './SocialMediaIcon.module.scss';

interface FacebookIconProps {
  className?: string;
}

const FacebookIcon: FC<FacebookIconProps> = (props) => {
    const { className } = props;
    return (
        <i
            className={classNames(cls.FacebookIcon, {}, [className])}
        >
            <FacebookImg />
        </i>
    );
};

export default FacebookIcon;
