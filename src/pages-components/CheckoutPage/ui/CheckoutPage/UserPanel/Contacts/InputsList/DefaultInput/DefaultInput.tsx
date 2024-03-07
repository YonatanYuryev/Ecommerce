import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import cls from './DefaultInput.module.scss';

interface DefaultInputProps {
  className?: string;
  text: string;
  id: string;
}

const DefaultInput: FC<DefaultInputProps> = (props) => {
    const { className, text, id } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <label
                className={classNames(cls.Label)}
                htmlFor={id}
            >
                {t(text)}
            </label>
            <Input
                className={classNames(cls.Input)}
                id={id}
                theme={InputTheme.CLEAR}
            />
        </div>
    );
};

export default DefaultInput;
