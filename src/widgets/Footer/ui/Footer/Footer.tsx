import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/ui/Container';
import cls from './Footer.module.scss';
import FooterColumnsList from '../FooterColumnsList/FooterColumnsList';
import SocialMedia from '../SocialMedia/SocialMedia';

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            <Container>
                <FooterColumnsList />
                <SocialMedia />
            </Container>
        </div>
    );
};

export default Footer;
