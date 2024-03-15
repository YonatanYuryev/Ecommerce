import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import cls from './ProductPage.module.scss';
import Gallery from './Gallery/Gallery';
import Description from './Description/Description';

interface ProductPageProps {
  className?: string;
}

const ProductPage: FC<ProductPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ProductPage, {}, [className])}>
            <Container>
                <BreadCrumbs className={classNames(cls.Breadcrumbs)} />
                <div className={classNames(cls.Content)}>
                    <Gallery />
                    <Description />
                </div>
            </Container>
        </div>
    );
};

export default ProductPage;
