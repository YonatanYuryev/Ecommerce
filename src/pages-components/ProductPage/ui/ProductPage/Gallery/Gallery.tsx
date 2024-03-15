import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Image1 from 'shared/assets/icons/gallery/image1.png';
import Image2 from 'shared/assets/icons/gallery/image2.png';
import Image3 from 'shared/assets/icons/gallery/image3.png';
import Image4 from 'shared/assets/icons/gallery/image4.png';
import cls from './Gallery.module.scss';

interface GalleryProps {
  className?: string;
}

const Gallery: FC<GalleryProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Gallery, {}, [className])}>
            <figure className={classNames(cls.ImageWrapper)}>
                <img className={classNames(cls.Image)} src={Image1} alt="I" />
            </figure>
            <figure className={classNames(cls.ImageWrapper)}>
                <img className={classNames(cls.Image)} src={Image2} alt="I" />
            </figure>
            <figure className={classNames(cls.ImageWrapper)}>
                <img className={classNames(cls.Image)} src={Image3} alt="I" />
            </figure>
            <figure className={classNames(cls.ImageWrapper)}>
                <img className={classNames(cls.Image)} src={Image4} alt="I" />
            </figure>
        </div>
    );
};

export default Gallery;
