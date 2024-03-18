import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import NextButtonIcon from 'shared/assets/icons/NextButton.svg';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './NextButton.module.scss';

interface NextButtonProps {
  className?: string;
}

const NextButton: FC<NextButtonProps> = (props) => {
    const { className } = props;
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.PaginationButton, {}, [className])}
        >
            <NextButtonIcon />
        </Button>
    );
};

export default NextButton;
