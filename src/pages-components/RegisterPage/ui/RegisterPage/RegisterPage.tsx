import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import cls from './RegisterPage.module.scss';
import RegisterForm from './RegisterForm/RegisterForm';

interface RegisterPageProps {
  className?: string;
}

const RegisterPage: FC<RegisterPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.RegisterPage, {}, [className])}>
            <Container>
                <BreadCrumbs />
                <RegisterForm />
            </Container>
        </div>
    );
};

export default RegisterPage;
