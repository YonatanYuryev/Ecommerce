import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import cls from './RestorePage.module.scss';
import RestoreForm from '../RestoreForm/RestoreForm';

interface RestorePageProps {
  className?: string;
}

const RestorePage: FC<RestorePageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.RestorePage, {}, [className])}>
            <Container>
                <BreadCrumbs />
                <RestoreForm />
            </Container>
        </div>
    );
};

export default RestorePage;
