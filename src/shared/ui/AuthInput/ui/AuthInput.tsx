import { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import EyeIcon from 'shared/assets/icons/eye.svg';
import cls from './AuthInput.module.scss';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  hasIcon: boolean;
}

const AuthInput: FC<AuthInputProps> = (props) => {
    const {
        className, hasIcon, ...additional
    } = props;
    return (
        <label className={classNames(cls.AuthFormInput, {}, [className])}>
            <Input
                theme={InputTheme.CLEAR}
                className={classNames(cls.AuthFormField)}
                {...additional}
            />
            {hasIcon && (
                <EyeIcon
                    className={classNames(cls.AuthFormInputIcon)}
                />
            )}
        </label>
    );
};

export default AuthInput;
