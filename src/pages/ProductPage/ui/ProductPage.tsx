import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Товар')}</div>);
};

export default ProductPage;
