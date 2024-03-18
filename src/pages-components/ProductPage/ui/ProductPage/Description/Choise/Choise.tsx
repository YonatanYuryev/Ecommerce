import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Choise.module.scss';
import Size from './Size/Size';
import Colors from './Colors/Colors';

interface ChoiseProps {
  className?: string;
}

const Choise: FC<ChoiseProps> = (props) => {
    const { className } = props;
    const color = 'Black';
    const label = 'Color';

    return (
        <div className={classNames(cls.Choise, {}, [className])}>
            <div className={classNames(cls.LabelWrapper)}>
                <p className={classNames(cls.Label)}>
                    {label}
                    :
                </p>
                <p className={classNames(cls.Text)}>{color}</p>
            </div>
            <Colors />
            <Size />
        </div>
    );
};

export default Choise;
