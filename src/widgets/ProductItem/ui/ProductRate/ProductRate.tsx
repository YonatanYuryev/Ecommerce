import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import RateStar from 'shared/assets/icons/RateStar.svg';
import cls from './ProductRate.module.scss';

interface ProductRateProps {
  className?: string;
  cardId: number;
  onClickProduct: (id: number, rating: number) => void;
}

const ProductRate: FC<ProductRateProps> = (props) => {
    const { className, cardId, onClickProduct } = props;
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);

    return (
        <div className={classNames(cls.ProductRate, {}, [className])}>
            {(Array(5).fill(0)).map((_, idx) => {
                const num = idx + 1;
                return (
                    <RateStar
                        className={classNames(
                            cls.RateStar,
                            { hovered: num <= (hover || rating) },
                            [],
                        )}
                        key={num}
                        onClick={() => {
                            setRating(num);
                            onClickProduct(cardId, rating);
                        }}
                        onMouseEnter={() => setHover(num)}
                        onMouseLeave={() => setHover(rating)}
                    />
                );
            })}
        </div>
    );
};

export default ProductRate;
