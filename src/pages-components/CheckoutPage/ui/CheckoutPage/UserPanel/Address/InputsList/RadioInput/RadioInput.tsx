import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Radio } from 'shared/ui/Radio';
import cls from './RadioInput.module.scss';

interface RadioInputProps {
  className?: string;
  id: string & ('Standart' | 'Premium');
  text: string & ('Стандарт' | 'Премиум');
}

const RadioInput: FC<RadioInputProps> = (props) => {
    const { className, id, text } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.RadioInputWrapper, {}, [className])}>
            <Radio id={id} />
            <label
                className={
                    classNames(cls.Label, {}, [cls.StandartLabel])
                }
                htmlFor={id}
            >
                {t(text)}
            </label>
        </div>
    );
};

export default RadioInput;
