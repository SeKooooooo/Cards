import { Button, Flex, Form, Typography } from 'antd';
import style from './RegistrationForm.module.css';
import { RegistrationInput } from '../../custom-input/RegistrationInput/RegistrationInput';

export function RegistrationForm() {
	const handleSubmit = () => {
		
	}
	return (
		<Flex className={style.form} align="center" vertical>
			<Typography.Text className={style.label}>
				Registration
			</Typography.Text>
			<Form onFinish={handleSubmit}>
				<RegistrationInput
					placeholder="Name"
					name="username"
					required={true}
				/>
				<RegistrationInput
					placeholder="Email"
					name="email"
					required={true}
				/>
				<RegistrationInput
					placeholder="Password"
					name="password"
					required={true}
				/>
				<RegistrationInput
					placeholder="Avatar"
					name="avatar"
					required={true}
				/>
			</Form>
			<Button className={style.btn} htmlType='submit'>
				Registration
			</Button>
		</Flex>
	);
}
