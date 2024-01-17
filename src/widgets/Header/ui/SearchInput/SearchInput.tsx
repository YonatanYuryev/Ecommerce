import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import SearchIcon from 'shared/assets/icons/Search.svg';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './SearchInput.module.scss';

interface SearchInputProps {
  className?: string;
}

const SearchInput: FC<SearchInputProps> = (props) => {
    const { className } = props;
    const placeholderText = 'Search';
    const { theme } = useTheme();

    return (
        <label
            className={classNames(cls.SearchInput, {}, [className, cls[theme]])}
            htmlFor="search"
        >
            <SearchIcon
                className={classNames(cls.SearchIcon, {}, [cls[theme]])}
            />
            <Input
                placeholder={placeholderText}
                id="search"
                theme={InputTheme.CLEAR}
                className={theme}
            />
        </label>
    );
};

export default SearchInput;
