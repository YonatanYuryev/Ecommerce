import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AuthInput } from 'shared/ui/AuthInput';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './RestoreForm.module.scss';
import RestoreTopControls from '../RestoreTopControls/RestoreTopControls';

interface RestoreFormProps {
  className?: string;
}

const RestoreForm: FC<RestoreFormProps> = (props) => {
    const { className } = props;
    const placeholder1 = 'Your Email';
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(cls.RestoreForm, {}, [className])}>
            <div className={classNames(cls.RestoreFormInner)}>
                <RestoreTopControls />
                <AuthInput hasIcon={false} placeholder={placeholder1} />
                <Button
                    className={classNames(cls.RestoreFormButton)}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </div>
    );
};

export default RestoreForm;
