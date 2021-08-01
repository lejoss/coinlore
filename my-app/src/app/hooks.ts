import React from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePagination = () => {
	const [page, setPage] = React.useState(1)
	const [coinsPerPage] = React.useState(9)

	const indexOfLastCoin = page * coinsPerPage
	const indexOfFirstCoin = indexOfLastCoin - coinsPerPage

	const sliceCoins = (coins: []): any[] | null => {
		if (!coins) return null
		return coins.slice(indexOfFirstCoin, indexOfLastCoin)
	}

	const setPageNumbers = (coins: []) => {
		if (!coins) return
		const pageNumbers = []
		for (let i = 1; i <= Math.ceil(coins?.length / coinsPerPage); i++) {
			pageNumbers.push(i);
		}
		return pageNumbers
	}

	return { setPage, sliceCoins, setPageNumbers, page }
}
