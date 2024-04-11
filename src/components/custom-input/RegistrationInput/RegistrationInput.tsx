import { Form, Input } from 'antd';
import style from './RegistrationInput.module.css'

type Props = {
	placeholder:string
	name: string
	required: boolean

}

export function RegistrationInput({placeholder,name,required}: Props){
	return(
		<Form.Item className={style.item}>
			<Input className={style.input} placeholder={placeholder} name={name} required={required}/>
		</Form.Item>
	)
}