import { Flex, Typography } from 'antd';
import { CardItem } from '../index';
import styles from './CardsList.module.css';
import { Card } from '../../utils/Card';

type Props = {
	cards: Card[] | undefined;
};

export const CardsList = ({ cards }: Props) => {
	return (
		<div className={styles.wrapper}>
			<Flex justify="center" wrap="wrap" className={styles.list}>
				{cards?.length ? (
					cards?.map((card) => <CardItem key={card.id} card={card} />)
				) : (
					<Typography.Text className={styles.text}>
						Не найдено
					</Typography.Text>
				)}
			</Flex>
		</div>
	);
};
