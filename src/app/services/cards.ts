import { Card } from '../../utils/Card';
import { CommonResponseCard } from '../../utils/CommonResponceCard';
import { CommonResponseCards } from '../../utils/CommonResponseCards';
import { api } from './api';


export const cardsApi = api.injectEndpoints({
	endpoints: (builder)=>({
		getCards: builder.query<CommonResponseCards, number>({
			query: (count)=>({
				url: `/users?page=${count}`,
				method: 'GET'
			})
		}),
		getCard:builder.query<CommonResponseCard, number>({
			query: (id)=>({
				url: `/users/${id}`,
				method: 'GET'
			})
		}),
		updateUser: builder.mutation<string,Card>({
			query: (card)=>({
				url: `/users/${card.id}`,
				method: 'PATCH',
				body: card
			})
		}),
	})
})

export const {useGetCardsQuery, useGetCardQuery, useUpdateUserMutation} = cardsApi
export const {endpoints: {getCards,updateUser,getCard}} = cardsApi
