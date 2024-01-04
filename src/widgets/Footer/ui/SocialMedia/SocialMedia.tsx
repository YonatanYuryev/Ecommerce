import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SocialMedia.module.scss';
import FacebookIcon from '../SocialMediaIcons/FacebookIcon';
import InstagramIcon from '../SocialMediaIcons/InstagramIcon';
import TwitterIcon from '../SocialMediaIcons/TwitterIcon';

interface SocialMediaProps {
  className?: string;
}

const SocialMedia: FC<SocialMediaProps> = (props) => {
    const { className } = props;
    const copyrightText = 'Title © 2022';

    return (
        <div className={classNames(cls.SocialMedia, {}, [className])}>
            <p className={cls.Copyright}>{copyrightText}</p>
            <ul className={cls.SocialMediaList}>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </ul>
        </div>
    );
};

export default SocialMedia;
