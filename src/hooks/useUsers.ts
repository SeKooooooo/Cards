import { useMemo } from 'react';
import { Card } from '../utils/Card';

export function useSorted(users: Card[], sortedQuery: string, directionSorted: string): Card[]{
	const isIncrease = directionSorted === 'increase'
	const sortedUsers = useMemo(()=>{
		if (sortedQuery){
			return [...users].sort((a,b) => isIncrease ? a[sortedQuery].localeCompare(b[sortedQuery]) : b[sortedQuery].localeCompare(a[sortedQuery]))
		}
		return users
	},[sortedQuery,users])

	return sortedUsers
}

export function useUsers(users: Card[], searchQuery: string, sortedQuery: string, directionSorted: string ): Card[]{
	const sortedUsers = useSorted(users, sortedQuery, directionSorted)
	const sortedAndFilterUsers = useMemo(()=>{
		if (searchQuery){
			return sortedUsers.filter(user => user.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
		}
		return sortedUsers
	},[searchQuery,users])
	
	return sortedAndFilterUsers
}

