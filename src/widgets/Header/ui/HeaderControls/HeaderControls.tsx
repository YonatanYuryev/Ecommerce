import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ShoppingBagIcon from 'shared/assets/icons/ShoppingBag.svg';
import UserIcon from 'shared/assets/icons/User.svg';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './HeaderControls.module.scss';
import SearchInput from '../SearchInput/SearchInput';

interface HeaderControlsProps {
  className?: string;
}

const HeaderControls: FC<HeaderControlsProps> = (props) => {
    const { className } = props;
    const { theme } = useTheme();

    return (
        <div className={classNames(cls.HeaderControls, {}, [className])}>
            <SearchInput />
            <Button theme={ThemeButton.CLEAR}>
                <ShoppingBagIcon
                    className={classNames(cls.Icon, {}, [cls[theme]])}
                />
            </Button>
            <Button theme={ThemeButton.CLEAR}>
                <UserIcon className={classNames(cls.Icon, {}, [cls[theme]])} />
            </Button>
        </div>
    );
};

export default HeaderControls;
