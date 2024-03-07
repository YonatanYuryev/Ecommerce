import { FC, LabelHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { useTranslation } from 'react-i18next';
import MailIcon from 'shared/assets/icons/envelope.svg';
import cls from './SubscriptionInput.module.scss';

interface SubscriptionInputProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const SubscriptionInput: FC<SubscriptionInputProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');

    return (
        <label className={classNames(cls.SubscriptionInput, {}, [className])}>
            <MailIcon />
            <Input
                theme={InputTheme.CLEAR}
                placeholder={t('Введите адрес электронной почты')}
                className={cls.SubscriptionField}
            />
        </label>
    );
};

export default SubscriptionInput;
