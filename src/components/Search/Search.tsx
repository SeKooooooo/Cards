import { Input } from 'antd';
import styles from './Search.module.css';

type Props = {
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
	searchQuery: string;
};

export const Search = (props: Props) => {
	const { setSearchQuery, searchQuery }: Props = props;
	return (
		<Input
			defaultValue={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			className={styles.search}
		/>
	);
};
