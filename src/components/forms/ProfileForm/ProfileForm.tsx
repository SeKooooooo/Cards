import { ProfileInput } from '../../index';
import { useAppSelector } from '../../../app/hooks';
import { selectUserInfo } from '../../../features/authSlice';
import { useState } from 'react';
import styles from './ProfileForm.module.css';
import { Button, Form } from 'antd';
import { useUpdateMutation } from '../../../app/services/auth';

type Labels = {
	[key: string]: string;
};

const labels: Labels = {
	username: 'Name',
	email: 'Email',
	password: 'Password',
	avatar: 'Avatar',
};

export const ProfileForm = () => {
	const [user, setUser] = useState(useAppSelector(selectUserInfo));
	const [update] = useUpdateMutation();
	const userChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setUser((last) => {
			const newUser = { ...last };
			newUser[name] = value;
			return newUser;
		});
	};

	const handleChangeUser = () => {
		update(user);
	};

	return (
		<Form className={styles.form}>
			{Object.keys(labels).map((key) => (
				<ProfileInput
					value={user[key]}
					name={key}
					required={true}
					userChange={(e) => userChange(e)}
					label={labels[key]}
				/>
			))}
			<Button onClick={handleChangeUser} className={styles.btnSave}>
				Сохранить
			</Button>
		</Form>
	);
};
