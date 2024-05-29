import { Form, Input } from 'antd';
import style from './RegistrationInput.module.css';

type Props = {
	placeholder: string;
	name: string;
	required: boolean;
};

export const RegistrationInput = (props: Props) => {
	const { placeholder, name, required }: Props = props;
	return (
		<Form.Item className={style.item} name={name}>
			<Input
				className={style.input}
				placeholder={placeholder}
				name={name}
				required={required}
			/>
		</Form.Item>
	);
};
