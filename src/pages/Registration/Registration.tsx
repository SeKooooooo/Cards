import { Flex } from 'antd';
import { RegistrationForm } from '../../components/forms/RegistrationForm/RegistrationForm';
import style from './Registration.module.css'

export function Registration(){
	return(
		<Flex justify='center' align='center' className={style.page}>
			<RegistrationForm/>
		</Flex>
	)
}