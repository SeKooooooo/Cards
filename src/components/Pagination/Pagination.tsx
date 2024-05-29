import { Flex } from 'antd';
import styles from './Pagination.module.css';

type Props = {
	totalPages: number;
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = (props: Props) => {
	const { totalPages, page, setPage }: Props = props;
	let pages: number[] = [];
	
	for (let i = 1; i <= totalPages; i += 1) {
		pages.push(i);
	}

	return (
		<Flex className={styles.pagination} gap={30}>
			{pages.map((num) => (
				<Flex
					key={num}
					className={`${styles.number} ${
						page === num && styles.active
					}`}
					onClick={() => setPage(num)}
				>
					{num}
				</Flex>
			))}
		</Flex>
	);
};
