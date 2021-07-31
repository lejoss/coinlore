import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface CoinState {
	coins: []
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CoinState = {
	coins: [],
	status: 'idle',
}

export const coinSlice = createSlice({
	name: 'coin',
	initialState,
	reducers: {
		fetchCoins: (state, action: PayloadAction<[]>) => {
			return {
				...state,
				coins: action.payload,
			};
		}
	},
})

export const { fetchCoins } = coinSlice.actions

export const coinSelector = (state: RootState) => state.data.coins

export default coinSlice.reducer;