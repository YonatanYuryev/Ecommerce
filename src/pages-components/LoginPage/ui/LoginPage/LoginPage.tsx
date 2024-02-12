import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import cls from './LoginPage.module.scss';
import LoginForm from '../LoginForm/LoginForm';

interface LoginPageProps {
  className?: string;
}

const LoginPage: FC<LoginPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.LoginPage, {}, [className])}>
            <Container>
                <BreadCrumbs />
                <LoginForm />
            </Container>
        </div>
    );
};

export default LoginPage;
