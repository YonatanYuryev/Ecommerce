import { FC } from 'react';
import PrevButtonIcon from 'shared/assets/icons/PrevButton.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './PrevButton.module.scss';

interface PrevButtonProps {
  className?: string;
}

const PrevButton: FC<PrevButtonProps> = (props) => {
    const { className } = props;
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.PaginationButton, {}, [className])}
        >
            <PrevButtonIcon />
        </Button>
    );
};

export default PrevButton;
