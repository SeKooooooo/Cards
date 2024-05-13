import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../utils/AuthState';
import { UserInfo, defaultUser } from '../utils/UserInfo';
import { RootState } from '../app/store';
import { authApi } from '../app/services/auth';
import { useAppDispatch } from '../app/hooks';
import { clear } from './pageSlice';


const initialState: AuthState = {
	userInfo:defaultUser,
	isAuth: false,
	token: ''
}

export const slice = createSlice({
	name: 'auth',
	initialState,
	reducers:{
		logout(){
			return initialState
		},
		registerInfo(state, action: PayloadAction<UserInfo>){
			state.userInfo = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authApi.endpoints.register.matchFulfilled,
			(state, action) => {
				state.userInfo.id = action.payload.id
				state.token = action.payload.token
				state.isAuth = true
			}
		).addMatcher(
			authApi.endpoints.update.matchFulfilled,
			(state, action) => {
				state.userInfo.avatar = action.payload.avatar
				state.userInfo.email = action.payload.email
				state.userInfo.password = action.payload.password
				state.userInfo.username = action.payload.username
			}
		)
	}
})

export default slice.reducer
export const {logout, registerInfo} = slice.actions

export const selectUserInfo = (state: RootState) => state.persistedReducer.userInfo
export const selectToken = (state: RootState) => state.persistedReducer.token
export const selectIsAuth = (state: RootState) => state.persistedReducer.isAuth
