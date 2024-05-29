import { Flex } from 'antd';
import { RegistrationForm } from '../../components/index';
import style from './RegistrationPage.module.css';

export const RegistrationPage = () => {
	return (
		<Flex justify="center" align="center" className={style.page}>
			<RegistrationForm />
		</Flex>
	);
};
