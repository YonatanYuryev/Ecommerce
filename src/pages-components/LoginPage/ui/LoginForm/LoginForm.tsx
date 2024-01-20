import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import { AuthInput } from 'shared/ui/AuthInput';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const placeholder1 = 'Email';
    const placeholder2 = 'Password';
    const toRegister = '/register';
    const toForgotPassword = '/reset';

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={classNames(cls.LoginFormTopSection)}>
                <h3
                    className={classNames(cls.LoginFormTitle)}
                >
                    {t('Войти')}

                </h3>
                <div className={classNames(cls.LoginFormTopControls)}>
                    <p
                        className={classNames(cls.LoginFormQuestion)}
                    >
                        {t('У вас нет учетной записи?')}

                    </p>
                    <AppLink
                        to={toRegister}
                        className={classNames(cls.LoginFormLink)}
                    >
                        {t('Зарегестрироваться')}

                    </AppLink>
                </div>
            </div>
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
    );
};

export default LoginForm;
