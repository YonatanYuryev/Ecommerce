import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { TypeAppLink } from 'shared/ui/AppLink/ui/AppLink';
import cls from './FooterItem.module.scss';
import { IFooterLink } from '../FooterColumnsList/FooterColumnsList.data';

interface FooterItemProps {
  className?: string;
  link: IFooterLink;
}

const FooterItem: FC<FooterItemProps> = (props) => {
    const { className, link } = props;
    return (
        <li className={classNames(cls.FooterItem, {}, [className])}>
            {link?.label
                  && (
                      <p
                          className={
                              classNames(cls.FooterLinkLabel)
                          }
                      >
                          {link.label}
                      </p>
                  )}
            {link.label
                ? (
                    <p
                        className={
                            classNames(cls.FooterLinkValue, {}, [cls[link.label]])
                        }
                    >
                        {link.text}
                    </p>
                )
                : (
                    <AppLink
                        to={link.path}
                        type={TypeAppLink.FOOTER_CHILD}
                    >
                        {link.text}

                    </AppLink>
                )}
        </li>
    );
};

export default FooterItem;
