import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Checkbox } from 'shared/ui/Checkbox';
import { Radio } from 'shared/ui/Radio';
import cls from './FilterItem.module.scss';

interface FilterItemProps {
  className?: string;
  hasInput: boolean;
  inputType?: string & ('checkbox' | 'radio');
}

const FilterItem: FC<FilterItemProps> = (props) => {
    const {
        className, hasInput, inputType, children,
    } = props;
    return (
        <label
            htmlFor={`${children}`}
            className={classNames(cls.FilterItem, {}, [className])}
        >
            {hasInput && (inputType === 'checkbox'
                ? <Checkbox id={`${children}`} />
                : <Radio id={`${children}`} />)}
            <span className={classNames(cls.FilterLabel)}>
                {children}
            </span>
        </label>
    );
};

export default FilterItem;
