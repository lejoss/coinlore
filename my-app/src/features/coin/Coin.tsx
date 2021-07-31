import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { sagaActions } from '../../app/sagaActions';
import { Table } from '../../components/table/Table'
import { CoinDetail } from '../../components/coin_detail/CoinDetail'
import { coinSelector } from './coinSlice'

export type Coin = {
	id: string,
	symbol: string,
	name: string,
	nameid: string,
	rank: number,
	price_usd: string,
	percent_change_24h: string,
	price_btc: string,
	market_cap_usd: string,
}

export function CoinPage() {
	const coins = useAppSelector(coinSelector)
	const dispatch = useAppDispatch()
	const [coin, setCoin] = React.useState(null)
	const [foundCoins, setFoundCoins] = React.useState(coins)
	const [filterValue, setFilterValue] = React.useState('')

	React.useEffect(() => {
		dispatch({ type: sagaActions.FETCH_COINS_SAGA })
	}, [dispatch])

	React.useEffect(() => {
		if (!coins?.length) return
		setFoundCoins(coins)
	}, [coins])

	const handleOnSelectRow = (coinId: string) => {
		const [coinFound] = coins.filter(({ id }) => id === coinId)
		setCoin(coinFound)
	}

	const handleOnChangeFilterValue = (event: any) => {
		const { value } = event.target
		if (value !== '') {
			const results: Coin[] | any = coins?.filter((coin: Coin) => coin.name.toLowerCase().startsWith(value.toLowerCase()))
			setFoundCoins(results)
		} else {
			setFoundCoins(coins)
		}
		setFilterValue(value)
	}

	const Filters = ({ children }: { children: any }) => <div>{children}</div>
	const Pagination = () => null

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<label>
				<input type="text" value={filterValue} onChange={handleOnChangeFilterValue} />	
			</label>
			<Table data={foundCoins} headers={['SYMBOL', 'NAME', '$USD']} onSelectRow={handleOnSelectRow} />
			<CoinDetail coin={coin}/>
			<Pagination />
		</div>
	)
}
