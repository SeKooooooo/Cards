import { ProfileInput } from '../../index';
import { useState } from 'react';
import styles from './CardForm.module.css';
import { Button, Form } from 'antd';
import { Card } from '../../../utils/Card';
import { useUpdateUserMutation } from '../../../app/services/cards';

type Labels = {
	[key: string]: string;
};

const labels: Labels = {
	name: 'Name',
	email: 'Email',
	avatar: 'Avatar',
};

type Props = {
	info: Card;
};

export const CardForm = ({ info }: Props) => {
	const [user, setUser] = useState<Card>(info);
	const [updateUser] = useUpdateUserMutation();
	const userChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setUser((last) => {
			let newUser = { ...last };
			newUser[name] = value;
			return newUser;
		});
	};

	const handleChangeUser = () => {
		updateUser(user);
	};

	return (
		<Form className={styles.form} onFinish={handleChangeUser}>
			{Object.keys(user).map(
				(key) =>
					key !== 'id' && (
						<ProfileInput
							value={user[key]}
							name={key}
							required={true}
							userChange={userChange}
							label={labels[key]}
						/>
					)
			)}
			<Button className={styles.btnSave} htmlType="submit">
				Сохранить
			</Button>
		</Form>
	);
};
