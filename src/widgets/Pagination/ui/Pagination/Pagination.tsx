import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Pagination.module.scss';
import PaginationList from './PaginationList/PaginationList';
import PrevButton from './PrevButton/PrevButton';
import NextButton from './NextButton/NextButton';

interface PaginationProps {
  className?: string;
}

const Pagination: FC<PaginationProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Pagination, {}, [className])}>
            <PrevButton />
            <PaginationList />
            <NextButton />
        </div>
    );
};

export default Pagination;
