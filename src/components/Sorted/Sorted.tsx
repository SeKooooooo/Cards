import { Select } from 'antd';
import styles from './Sorted.module.css'
import { Option } from '../../utils/Option';

type Props = {
	sortedQuery: string
	setSortedQuery: React.Dispatch<React.SetStateAction<string>>
	options: Option[]
}

export function Sorted({sortedQuery, setSortedQuery, options}: Props){
	return(
		<Select
		defaultValue={sortedQuery}
		onChange={e=>setSortedQuery(e)}
		options={options}
		className={styles.select}
		/>
	)
}