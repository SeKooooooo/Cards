import avatarSrc from '../../accept/icons/avatar.png'
import { selectUserInfo } from '../../features/authSlice';
import { Flex, Image, Typography } from 'antd';
import styles from './ProfilePage.module.css'
import { ProfileForm } from '../../components/forms/ProfileForm/ProfileForm';
import { useAppSelector } from '../../app/hooks';

export function ProfilePage(){
	const user = useAppSelector(selectUserInfo)
	return (
		<Flex className={styles.body} >
			<Typography.Text className={styles.title}>Profile</Typography.Text>
			<Image src={user?.avatar!} preview={false} className={styles.avatar} fallback={avatarSrc}/> 
			<ProfileForm/>
		</Flex>
	)
}