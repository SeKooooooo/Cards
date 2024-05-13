import styles from './CardItem.module.css';
import {Flex, Image, Typography } from 'antd';
import { Link} from 'react-router-dom';
import { Card } from '../../utils/Card';

type Props={
	card: Card
}

export function CardItem({card}: Props) {
	return (
		<Link to={`/cards/${card.id}`}>
			<Flex className={styles.card} align='center' vertical>
				<Image src={card.avatar} preview={false} className={styles.avatar}/>
				<Typography.Text className={styles.name}>
					{card.name}
				</Typography.Text>
				<Typography.Text className={styles.email}>
					{card.email}
				</Typography.Text>
			</Flex>
		</Link>
	);
}
