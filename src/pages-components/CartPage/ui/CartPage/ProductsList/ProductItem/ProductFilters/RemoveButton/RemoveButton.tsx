import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './RemoveButton.module.scss';

interface RemoveButtonProps {
  className?: string;
}

const RemoveButton: FC<RemoveButtonProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.RemoveButton, {}, [className])}
        >
            {t('Удалить')}
        </Button>
    );
};

export default RemoveButton;
