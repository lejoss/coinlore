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
	}, [])

	const handleOnSelectRow = (coinId: string) => {
		const [coinFound] = coins.filter(({ id }) => id === coinId)
		setCoin(coinFound)
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Table data={coins} headers={['SYMBOL', 'NAME', '$USD']} onSelectRow={handleOnSelectRow} />
			<CoinDetail coin={coin}/>
		</div>
	)
}
