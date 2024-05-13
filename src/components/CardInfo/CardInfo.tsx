import { Flex, Typography } from 'antd';
import styles from './CardInfo.module.css'
type Props={
	name:string
	email:string
}

export function CardInfo({name, email}: Props){
	return(
		<Flex className={styles.info}>
			<Typography.Text className={styles.text}>{name}</Typography.Text>
			<Typography.Text className={styles.text}>{email}</Typography.Text>
		</Flex>
	)
}