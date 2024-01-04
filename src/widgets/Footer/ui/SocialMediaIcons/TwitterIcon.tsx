import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import TwitterImg from 'shared/assets/icons/Twitter.svg';
import cls from './SocialMediaIcon.module.scss';

interface TwitterIconProps {
  className?: string;
}

const TwitterIcon: FC<TwitterIconProps> = (props) => {
    const { className } = props;
    return (
        <i className={classNames(cls.TwitterIcon, {}, [className])}>
            <TwitterImg />
        </i>
    );
};

export default TwitterIcon;
