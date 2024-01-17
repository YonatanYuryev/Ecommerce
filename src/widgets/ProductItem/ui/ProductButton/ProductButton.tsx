import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import AddToCartIcon from 'shared/assets/icons/AddToCart.svg';
import cls from './ProductButton.module.scss';

interface ProductButtonProps {
  className?: string;
  onClick: () => void;
  isAdded: boolean;
}

const ProductButton: FC<ProductButtonProps> = (props) => {
    const { className, onClick, isAdded } = props;
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ProductButton, {}, [className])}
        >
            <div className={
                classNames(cls.ButtonInner, { active: isAdded }, [])
            }
            >
                <AddToCartIcon />
            </div>
        </Button>
    );
};

export default ProductButton;
