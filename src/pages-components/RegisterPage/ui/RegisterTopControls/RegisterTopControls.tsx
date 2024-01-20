import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './RegisterTopControls.module.scss';

interface RegisterTopControlsProps {
  className?: string;
}

const RegisterTopControls: FC<RegisterTopControlsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const toLogin = '/login';

    return (
        <div
            className={classNames(cls.RegisterFormTopSection, {}, [className])}
        >
            <h3
                className={classNames(cls.RegisterFormTitle)}
            >
                {t('Зарегестрироваться')}

            </h3>
            <div className={classNames(cls.RegisterFormTopControls)}>
                <p
                    className={classNames(cls.RegisterFormQuestion)}
                >
                    {t('У вас уже есть аккаунт?')}

                </p>
                <AppLink
                    to={toLogin}
                    className={classNames(cls.RegisterFormLink)}
                >
                    {t('Войти')}

                </AppLink>
            </div>
        </div>
    );
};

export default RegisterTopControls;
