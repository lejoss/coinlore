import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { sagaActions } from '../../app/sagaActions';
import { Table } from '../../components/table/Table'
import { CoinDetail } from '../../components/coin_detail/CoinDetail'
import { coinSelector } from './coinSlice'

export function Coin() {
	const [coin, setCoin] = React.useState(null)
	const coins = useAppSelector(coinSelector)
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		dispatch({ type: sagaActions.FETCH_COINS_SAGA })
	}, [dispatch])

	const handleOnSelectRow = (coinId: string) => {
		const [coinFound] = coins.filter(({ id }) => id === coinId)
		setCoin(coinFound)
	}

	const Filters = () => null
	const Pagination = () => null

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Filters />
			<Table data={coins} headers={['SYMBOL', 'NAME', '$USD']} onSelectRow={handleOnSelectRow} />
			<CoinDetail coin={coin}/>
			<Pagination />
		</div>
	)
}
