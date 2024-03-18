import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Description.module.scss';
import MainInfo from './MainInfo/MainInfo';
import Choise from './Choise/Choise';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';

interface DescriptionProps {
  className?: string;
}

const Description: FC<DescriptionProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Description, {}, [className])}>
            <MainInfo />
            <Choise />
            <AdditionalInfo />
        </div>
    );
};

export default Description;
