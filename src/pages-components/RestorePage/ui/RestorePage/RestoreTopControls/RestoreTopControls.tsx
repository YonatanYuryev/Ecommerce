import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './RestoreTopControls.module.scss';

interface RestoreTopControlsProps {
  className?: string;
}

const RestoreTopControls: FC<RestoreTopControlsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const toLogin = '/login';

    return (
        <div
            className={classNames(cls.RestoreFormTopSection, {}, [className])}
        >
            <h3
                className={classNames(cls.RestoreFormTitle)}
            >
                {t('Восстановить пароль')}

            </h3>
            <div className={classNames(cls.RestoreFormTopControls)}>
                <AppLink
                    to={toLogin}
                    className={classNames(cls.RestoreFormLink)}
                >
                    {t('Войти')}

                </AppLink>
            </div>
        </div>
    );
};

export default RestoreTopControls;
