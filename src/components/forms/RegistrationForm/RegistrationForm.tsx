import { Button, Flex, Form, Typography } from 'antd';
import style from './RegistrationForm.module.css';
import { RegistrationInput } from '../../custom-input/RegistrationInput/RegistrationInput';
import { useRegisterMutation } from '../../../app/services/auth';
import { UserInfo } from '../../../utils/UserInfo';
import { RegisterInfo } from '../../../utils/RegisterInfo';
import { useEffect, useState} from 'react';
import { registerInfo, selectIsAuth} from '../../../features/authSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';

export function RegistrationForm() {
	const [register,error] = useRegisterMutation();
	const location = useLocation()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const fromLocation = location.state?.from?.pathname || Paths.main
	const isAuth = useAppSelector(selectIsAuth)

	useEffect(()=>{
		if(isAuth){
			navigate(fromLocation, {replace: true})
		}
	},[isAuth, navigate])

	const handleSubmit = async (infoRegister: UserInfo) => {
		try{
			dispatch(registerInfo(infoRegister))
			const registerData: RegisterInfo = {
			email: infoRegister.email,
			password: infoRegister.password,
		};
			await register(registerData).unwrap()
		} catch(e){
			console.log(e);
		}
	};

	return (
		<Flex className={style.wrapper} align="center" vertical>
			<Typography.Text className={style.label}>
				Registration
			</Typography.Text>
			<Form onFinish={handleSubmit} className={style.form}>
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
				{
					error.isError && <p>
						Введены неверные данные!
					</p>
				}
				<Button className={style.btn} htmlType="submit">
					Registration
				</Button>
			</Form>
		</Flex>
	);
}
