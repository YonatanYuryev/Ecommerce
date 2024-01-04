import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { TypeAppLink } from 'shared/ui/AppLink/ui/AppLink';
import cls from './FooterColumn.module.scss';
import { IFooterBlock } from '../FooterColumnsList/FooterColumnsList.data';
import FooterItem from '../FooterItem/FooterItem';

interface FooterColumnProps {
  className?: string;
  column: IFooterBlock;
}

const FooterColumn: FC<FooterColumnProps> = (props) => {
    const { className, column } = props;
    const { childLinks, mainLink } = column;
    return (
        <div
            className={classNames(cls.FooterColumn, {}, [className])}
        >
            <AppLink
                style={{ marginBottom: '20px' }}
                type={TypeAppLink.FOOTER_MAIN}
                to={mainLink.path}
            >
                {mainLink.text}
            </AppLink>
            <ul
                className={
                    classNames(cls.FooterLinksList)
                }
            >
                {childLinks?.map((link) => (
                    <FooterItem key={link.text} link={link} />
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;
