import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './GoodsItem.module.scss';

interface GoodsItemProps {
  className?: string;
  imgUrl: ReactNode;
}

const GoodsItem: FC<GoodsItemProps> = (props) => {
    const { className, imgUrl } = props;
    const { t } = useTranslation();

    return (
        <li className={classNames(cls.GoodsItem)}>
            <img className={classNames(cls.Image)} src={`${imgUrl}`} alt="I" />
            <div className={classNames(cls.RightPanel)}>
                <p className={classNames(cls.Id)}>#7142</p>
                <p className={classNames(cls.Title)}>Basic t-shirt</p>
                <div className={classNames(cls.Color)}>
                    <p className={classNames(cls.Label)}>
                        {t('Цвет')}
                        :
                    </p>
                    <span className={classNames(cls.Content)}>Black with print</span>
                </div>
                <div className={classNames(cls.Size)}>
                    <p className={classNames(cls.Label)}>
                        {t('Размер')}
                        :
                    </p>
                    <span className={classNames(cls.Content)}>L / 14 US</span>
                </div>
                <div className={classNames(cls.Quantity)}>
                    <p
                        className={classNames(cls.Label)}
                    >
                        {t('Количество')}
                        :
                    </p>
                    <span className={classNames(cls.Content)}>1</span>
                </div>
                <p className={classNames(cls.Price)}>$35</p>
            </div>
        </li>
    );
};

export default GoodsItem;
