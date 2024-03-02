import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductsPanel.module.scss';
import Goods from './Goods/Goods';
import Summary from './Summary/Summary';

interface ProductsPanelProps {
  className?: string;
}

const ProductsPanel: FC<ProductsPanelProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ProductsPanel, {}, [className])}>
            <Goods />
            <Summary />
        </div>
    );
};

export default ProductsPanel;
