import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AuthInput } from 'shared/ui/AuthInput';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './RegisterForm.module.scss';
import RegisterTopControls from '../RegisterTopControls/RegisterTopControls';

interface RegisterFormProps {
  className?: string;
}

const RegisterForm: FC<RegisterFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const privacy = 'By signing in to your account you agree with our';
    const policy = 'Privacy Policy and Terms of Use.';

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <div className={classNames(cls.RegisterFormInner)}>
                <RegisterTopControls />
                <AuthInput hasIcon={false} placeholder="Name" />
                <AuthInput hasIcon={false} placeholder="Email" />
                <AuthInput hasIcon placeholder="Password" />
                <AuthInput hasIcon placeholder="Confirm Password" />
                <Button
                    className={classNames(cls.RegisterFormButton)}
                >
                    {t('Зарегестрироваться')}
                </Button>
                <div className={classNames(cls.PrivacyPolicy)}>
                    <p>{privacy}</p>
                    <p>{policy}</p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
