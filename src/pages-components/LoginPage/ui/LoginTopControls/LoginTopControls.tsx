import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import cls from './LoginTopControls.module.scss';

interface LoginTopControlsProps {
  className?: string;
}

const LoginTopControls: FC<LoginTopControlsProps> = (props) => {
    const { className } = props;
    const toRegister = '/register';
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(cls.LoginFormTopSection, {}, [className])}>
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
    );
};

export default LoginTopControls;
