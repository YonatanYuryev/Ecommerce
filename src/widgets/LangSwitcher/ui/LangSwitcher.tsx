import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import LanguageIcon from 'shared/assets/icons/language.svg';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { theme } = useTheme();
    const { t, i18n } = useTranslation();

    const toggleLan = () => {
        const currentLan = i18n.language;
        let lan = '';
        if (currentLan === 'he') {
            lan = 'en';
        } else if (currentLan === 'en') {
            lan = 'ru';
        } else {
            lan = 'he';
        }

        i18n.changeLanguage(lan);
    };

    return (
        <Button
            type="button"
            className={
                classNames(cls.LangSwitcher, {}, [className, cls[theme]])
            }
            theme={ThemeButton.CLEAR}
            onClick={toggleLan}
        >
            <LanguageIcon width={20} height={20} />
            {t('Язык')}
        </Button>
    );
};

export default LangSwitcher;
