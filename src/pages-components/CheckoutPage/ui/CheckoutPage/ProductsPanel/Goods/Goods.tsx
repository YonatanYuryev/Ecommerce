import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Image1 from 'shared/assets/test-products/img1.png';
import cls from './Goods.module.scss';
import GoodsItem from './GoodsItem/GoodsItem';

interface GoodsProps {
  className?: string;
}

const Goods: FC<GoodsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(cls.Goods, {}, [className])}>
            <h3 className={classNames(cls.Title)}>{t('Products')}</h3>
            <ul className={classNames(cls.GoodsItemsList)}>
                <GoodsItem imgUrl={Image1} />
                <GoodsItem imgUrl={Image1} />
            </ul>
        </div>
    );
};

export default Goods;
