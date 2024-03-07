import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation('pages');

    return (<div>{t('Профиль')}</div>);
};

export default ProfilePage;
