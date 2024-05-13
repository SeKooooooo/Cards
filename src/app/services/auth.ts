import { CommonResponseRegister } from '../../utils/CommonResponseRegister';
import { RegisterInfo } from '../../utils/RegisterInfo';
import { UserInfo } from '../../utils/UserInfo';
import { api } from './api';

export const authApi = api.injectEndpoints({
	endpoints:(builder)=>({
		register: builder.mutation<CommonResponseRegister,RegisterInfo>({
			query: (data)=>({
				url:'register',
				method:'POST',
				body: data
			})
		}),
		update: builder.mutation<any,UserInfo>({
			query: (data)=>({
				url:`users/${data.id}`,
				method:'PATCH',
				body: data
			})
		})
	}) 
})

export const {useRegisterMutation, useUpdateMutation} = authApi
export const { endpoints:{register}} = authApi