import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import { AuthInput } from 'shared/ui/AuthInput';
import cls from './LoginForm.module.scss';
import LoginTopControls from '../LoginTopControls/LoginTopControls';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const placeholder1 = 'Email';
    const placeholder2 = 'Password';
    const toForgotPassword = '/reset';

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={classNames(cls.LoginFormInner)}>
                <LoginTopControls />
                <AuthInput hasIcon={false} placeholder={placeholder1} />
                <AuthInput hasIcon placeholder={placeholder2} />
                <Button
                    className={classNames(cls.LoginFormButton)}
                >
                    {t('Логин')}
                </Button>
                <AppLink
                    to={toForgotPassword}
                    className={classNames(cls.LostYourPassword)}
                >
                    {t('Забыли пароль?')}
                </AppLink>
            </div>
        </div>
    );
};

export default LoginForm;
