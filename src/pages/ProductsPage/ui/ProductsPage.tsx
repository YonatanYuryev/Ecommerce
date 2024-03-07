import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Товары')}</div>);
};

export default ProductsPage;
