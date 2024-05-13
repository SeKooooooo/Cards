import { Flex,Typography } from 'antd';
import styles from './MainPage.module.css';
import { useGetCardsQuery } from '../../app/services/cards';
import { CardsList } from '../../components/CardsList/CardsList';
import { Pagination } from '../../components/Pagination/Pagination';
import { useState } from 'react';
import { Search } from '../../components/Search/Search';
import { Card } from '../../utils/Card';
import { useSorted } from '../../hooks/useSorted';

export function MainPage() {
	const [page, setPage] = useState<number>(1);
	const { data, isLoading } = useGetCardsQuery(page);

	const totalPages: number = data?.total_pages!;
	const users: Card[] | undefined = data?.data?.map((user) => {
		const info: Card = {
			name: `${user.first_name} ${user.last_name}`,
			email: user.email,
			avatar: user.avatar,
			id: user.id,
		};
		return info;
	});

	const [searchQuery, setSearchQuery] = useState('');

	const searchUsers = useSorted(users!, searchQuery);
	return (
		<Flex className={styles.body} vertical>
			{isLoading ? (
				<Typography.Text className={styles.loading}>Loading...</Typography.Text>
			) : (
				<>
					<Search
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
					/>
					<CardsList cards={searchUsers} />
					<Pagination
						totalPages={totalPages}
						page={page}
						setPage={setPage}
					/>
				</>
			)}
		</Flex>
	);
}
