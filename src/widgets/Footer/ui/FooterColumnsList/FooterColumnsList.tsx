import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FooterColumnsList.module.scss';
import FooterColumn from '../FooterColumn/FooterColumn';
import menu from './FooterColumnsList.data';

interface FooterColumnsListProps {
  className?: string;
}

const FooterColumnsList: FC<FooterColumnsListProps> = (props) => {
    const { className } = props;
    return (
        <ul className={classNames(cls.FooterColumnsList, {}, [className])}>
            {menu.map((column) => (
                <FooterColumn key={column.mainLink.text} column={column} />
            ))}
        </ul>
    );
};

export default FooterColumnsList;
