import avatarSrc from '../../accept/icons/avatar.png';
import { Button, Flex, Image, Typography } from 'antd';
import styles from './CardPage.module.css';
import redactorSrc from '../../accept/icons/redactor.svg';
import { useState } from 'react';
import { CardForm, CardInfo, RequireAuth  } from '../../components/index';
import { useGetCardQuery } from '../../app/services/cards';
import { useNavigate, useParams} from 'react-router-dom';
import { Card } from '../../utils/Card';

const CardPage = () => {
	const { id } = useParams();
	const { data } = useGetCardQuery(Number(id));
	const navigate = useNavigate();
	const card: Card = {
		name: `${data?.data.first_name} ${data?.data.last_name}`,
		email: data?.data.email!,
		avatar: data?.data.avatar!,
		id: String(data?.data.id!),
	};

	const [isRedactor, setIsRedactor] = useState<boolean>(false);
	return (
		<Flex className={styles.body}>
			<Typography.Text className={styles.title}>Card</Typography.Text>
			<Image
				src={card.avatar}
				preview={false}
				className={styles.avatar}
				fallback={avatarSrc}
			/>
			{isRedactor ? (
				<CardForm info={card} />
			) : (
				<CardInfo email={card.email} name={card.name} />
			)}
			<Button
				className={`${styles.btnRedactor} ${
					isRedactor && styles.active
				}`}
				onClick={() => setIsRedactor((last) => !last)}
			>
				<Image src={redactorSrc} preview={false} />
			</Button>
			<Button
				className={`${styles.btnBack} ${isRedactor && styles.active}`}
				onClick={() => navigate(-1)}
			>
				Back
			</Button>
		</Flex>
	);
};

export default RequireAuth<{}>(CardPage)
