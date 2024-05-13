import { useMemo } from 'react';
import { Card } from '../utils/Card';

export function useSorted(users: Card[], searchQuery: string): Card[]{
	const sortedUsers = useMemo(()=>{
		if (searchQuery)
			return users.filter(user => user.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
		return users
	},[searchQuery,users])
	
	return sortedUsers
}