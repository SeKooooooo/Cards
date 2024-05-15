import { Flex,Typography } from 'antd';
import styles from './MainPage.module.css';
import { useGetCardsQuery } from '../../app/services/cards';
import { CardsList } from '../../components/CardsList/CardsList';
import { Pagination } from '../../components/Pagination/Pagination';
import { useState } from 'react';
import { Search } from '../../components/Search/Search';
import { Card } from '../../utils/Card';
import { useUsers } from '../../hooks/useUsers';
import { Sorted } from '../../components/Sorted/Sorted';
import { optionsDirection, optionsSelect } from '../../const/options';

export function MainPage() {
	const [page, setPage] = useState<number>(1);
	const { data, isLoading } = useGetCardsQuery(page);

	const totalPages: number = data?.total_pages!;
	const users: Card[] | undefined = data?.data?.map((user) => {
		const info: Card = {
			name: `${user.first_name} ${user.last_name}`,
			email: user.email,
			avatar: user.avatar,
			id: String(user.id),
		};
		return info;
	});

	const [searchQuery, setSearchQuery] = useState<string>('');
	const [sortedQuery,  setSortedQuery] = useState<string>('');
	const [directionSorted, setDirectionSorted] = useState<string>('increase');

	const sortedAndFiltersUsers = useUsers(users!, searchQuery, sortedQuery, directionSorted);
	return (
		<Flex className={styles.body} vertical>
			{isLoading ? (
				<Typography.Text className={styles.loading}>Loading...</Typography.Text>
			) : (
				<>	
					<Flex justify='center' align='center' gap='30px' className={styles.sorted}>
						<Search
							searchQuery={searchQuery}
							setSearchQuery={setSearchQuery}
						/>
						<Sorted 
							sortedQuery={sortedQuery}
							setSortedQuery={setSortedQuery}
							options={optionsSelect}
						/>

						<Sorted 
							sortedQuery={directionSorted}
							setSortedQuery={setDirectionSorted}
							options={optionsDirection}
						/>
					</Flex>
					<CardsList cards={sortedAndFiltersUsers} />
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
