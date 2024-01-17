import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import EyeIcon from 'shared/assets/icons/eye.svg';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const placeholder1 = 'Email';
    const placeholder2 = 'Password';

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={classNames(cls.LoginFormTopSection)}>
                <h3 className={classNames(cls.LoginFormTitle)}>{t('Войти')}</h3>
                <div className={classNames(cls.LoginFormTopControls)}>
                    <p
                        className={classNames(cls.LoginFormQuestion)}
                    >
                        {t('У вас нет учетной записи?')}

                    </p>
                    <p
                        className={classNames(cls.LoginFormLink)}
                    >
                        {t('Зарегестрироваться')}

                    </p>
                </div>
            </div>
            <label className={classNames(cls.LoginFormInput)}>
                <Input
                    theme={InputTheme.CLEAR}
                    className={classNames(cls.LoginFormField)}
                    placeholder={placeholder1}
                />
            </label>
            <label className={classNames(cls.LoginFormInput)}>
                <Input
                    theme={InputTheme.CLEAR}
                    className={classNames(cls.LoginFormField)}
                    placeholder={placeholder2}
                />
                <EyeIcon className={classNames(cls.LoginFormInputIcon)} />
            </label>
            <Button
                className={classNames(cls.LoginFormButton)}
            >
                {t('Логин')}

            </Button>
            <p
                className={classNames(cls.LostYourPassword)}
            >
                {t('Забыли пароль?')}

            </p>
        </div>
    );
};

export default LoginForm;
