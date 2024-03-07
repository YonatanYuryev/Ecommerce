import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

type ThemeSwitcherSize = 'large' | 'small';

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { toggleTheme } = useTheme();
    const [togglerState, setTogglerState] = useState<string>('off');
    const {
        className,
    } = props;
    const size: ThemeSwitcherSize = 'large';

    const onClickToggle = () => {
        setTogglerState((prev) => (prev === 'on' ? 'off' : 'on'));
        toggleTheme();
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [
                cls[className],
                cls[size],
                cls[togglerState],
            ])}
            onClick={onClickToggle}
        >
            <span className={
                classNames(cls.slider, {}, [cls[togglerState], cls[size]])
            }
            />
        </Button>
    );
};

export default ThemeSwitcher;
