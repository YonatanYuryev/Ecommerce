import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PaginationList.module.scss';

interface PaginationListProps {
  className?: string;
}

const PaginationList: FC<PaginationListProps> = (props) => {
    const { className } = props;
    return (
        <ul className={classNames(cls.PaginationList, {}, [className])}>
            <li className={classNames(cls.PaginationItem)}>1</li>
            <li className={classNames(cls.PaginationItem)}>2</li>
            <li className={classNames(cls.PaginationItem)}>3</li>
            <li className={classNames(cls.PaginationItem)}>...</li>
            <li className={classNames(cls.PaginationItem)}>20</li>
        </ul>
    );
};

export default PaginationList;
