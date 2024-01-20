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
    const placeholder1 = 'Name';
    const placeholder2 = 'Email';
    const placeholder3 = 'Password';
    const placeholder4 = 'Confirm Password';
    const { t } = useTranslation('translation');
    const privacy = 'By signing in to your account you agree with our';
    const policy = 'Privacy Policy and Terms of Use.';

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <div className={classNames(cls.RegisterFormInner)}>
                <RegisterTopControls />
                <AuthInput hasIcon={false} placeholder={placeholder1} />
                <AuthInput hasIcon={false} placeholder={placeholder2} />
                <AuthInput hasIcon placeholder={placeholder3} />
                <AuthInput hasIcon placeholder={placeholder4} />
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
