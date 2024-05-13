import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

type InitialState={
	num: number
}

const initialState:InitialState={
	num: 1
}

export const slice = createSlice({
	name:'page',
	initialState,
	reducers: {
		changePage(state, action: PayloadAction<InitialState>) {
			state.num = action.payload.num
			console.log(state.num)
		},
		clear(){
			return initialState
		}
	}
})


export default slice.reducer
export const {changePage, clear} = slice.actions

export const selectNum = (state: RootState) => state.page.num