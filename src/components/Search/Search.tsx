import { Input } from 'antd';
import styles from './Search.module.css'

type Props={
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>
	searchQuery: string
}

export function Search({setSearchQuery,searchQuery}: Props){
	return(
		<Input defaultValue={searchQuery} onChange={e=>setSearchQuery(e.target.value)} className={styles.search}/>
	)
} 