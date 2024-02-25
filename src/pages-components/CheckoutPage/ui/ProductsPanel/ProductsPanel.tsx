import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductsPanel.module.scss';

interface ProductsPanelProps {
  className?: string;
}

const ProductsPanel: FC<ProductsPanelProps> = (props) => {
    const { className } = props;
    return <div className={classNames(cls.ProductsPanel, {}, [className])}>ProductsPanel</div>;
};

export default ProductsPanel;
