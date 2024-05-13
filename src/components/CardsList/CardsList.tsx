import { Flex, Typography } from 'antd';
import { CardItem } from '../CardItem/CardItem';
import styles from './CardsList.module.css'
import { Card } from '../../utils/Card';

type Props={
	cards: Card[] | undefined
}

export function CardsList({cards}: Props){
	return (
		<div className={styles.wrapper}>
			<Flex justify='center' wrap='wrap' className={styles.list}>
				{
					cards?.length!==0 ? cards?.map(card => <CardItem key={card.id} card={card}/>) : <Typography.Text className={styles.text}>Не найдено</Typography.Text>
				}
			</Flex>
		</div>
	)
}