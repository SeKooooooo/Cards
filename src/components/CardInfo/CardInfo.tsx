import { Flex, Typography } from 'antd';
import styles from './CardInfo.module.css';

type Props = {
	name: string;
	email: string;
};

export const CardInfo = (props: Props) => {
	const { name, email }: Props = props;
	return (
		<Flex className={styles.info}>
			<Typography.Text className={styles.text}>{name}</Typography.Text>
			<Typography.Text className={styles.text}>{email}</Typography.Text>
		</Flex>
	);
};
