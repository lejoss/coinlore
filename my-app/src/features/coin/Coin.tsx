import React from 'react'
import { useAppSelector, useAppDispatch, usePagination } from '../../app/hooks';
import { sagaActions } from '../../app/sagaActions';
import { Table } from '../../components/table/Table'
import { UserInput } from '../../components/user_input/userInput'
import { Title } from '../../components/title/title'
import { Pagination } from '../pagination/pagination'
import { CoinDetail } from '../../components/coin_detail/CoinDetail'
import { coinSelector } from './coinSlice'
import styles from './Coin.module.css'

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
	const { setPage, setPageNumbers, page, sliceCoins } = usePagination()
	const [coin, setCoin] = React.useState(null)
	const [foundCoins, setFoundCoins] = React.useState<any>([])
	const [filterValue, setFilterValue] = React.useState('')
	const [isFiltering, setIsFiltering] = React.useState(false)

	const pageNumbers: number[] | undefined = setPageNumbers(coins)
	const coinsToRender: any = isFiltering ? foundCoins : sliceCoins(coins)

	React.useEffect(() => {
		dispatch({ type: sagaActions.FETCH_COINS_SAGA })
	}, [dispatch])

	React.useEffect(() => {
		if (!coins?.length) return
		setFoundCoins(coins)
	}, [coins])

	React.useEffect(() => {
		if (filterValue !== '') {
			setIsFiltering(true)
		} else {
			setIsFiltering(false)
		}
	}, [filterValue])

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

	const handleChangePage = (e: any) => {
		setPage(parseInt(e.target.id))
	}

	return (
		<div className={styles.card}>
			<header className={styles.header}>
				<Title className={styles.title} text="coinlore" />
				<UserInput value={filterValue} onChange={handleOnChangeFilterValue} />
			</header>
			<Table className={styles.table} data={coinsToRender} headers={['SYMBOL', 'NAME', '$USD']} onSelectRow={handleOnSelectRow} />
			<CoinDetail coin={coin} />
			<Pagination className={styles.footer} pages={pageNumbers} onChangePage={handleChangePage} highlightIndex={page - 1} />
		</div>
	)
}
