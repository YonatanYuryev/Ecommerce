import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductItem } from 'widgets/ProductItem';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './AlsoLike.module.scss';

interface AlsoLikeProps {
  className?: string;
}

const AlsoLike: FC<AlsoLikeProps> = (props) => {
    const { className } = props;
    const { theme } = useTheme();
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(cls.AlsoLike, {}, [className, cls[theme]])}>
            <h3
                className={classNames(cls.AlsoLikeTitle, {}, [])}
            >
                {t('Вам также может понравиться')}

            </h3>
            <div className={classNames(cls.AlsoLikeProductsList)}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    );
};

export default AlsoLike;
