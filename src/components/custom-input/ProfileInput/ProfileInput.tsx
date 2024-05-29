import { Form, Input, Typography } from 'antd';
import styles from './ProfileInput.module.css';

type Props = {
	name: string;
	required: boolean | null;
	value: string | null | number;
	userChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
};

export const ProfileInput = (props: Props) => {
	const { name, required, value, userChange, label }: Props = props;
	return (
		<Form.Item className={styles.item} name={name || ''}>
			<Typography.Text className={styles.label}>{label}</Typography.Text>
			<Input
				className={styles.input}
				defaultValue={value || ''}
				name={name || ''}
				required={required || false}
				onChange={(e) => userChange(e)}
			/>
		</Form.Item>
	);
};
