import styles from './CoinDetail.module.css'
import { Table } from '../table/Table'
export type CoinDetailsProps = {
	coin?: {
		symbol: string,
		name: string,
		rank: number,
		price_usd: string,
		percent_change_24h: string,
		market_cap_usd: string
	} | null,
	className: string,

}
export function CoinDetail(props: CoinDetailsProps) {
	console.log([props.coin])
	return (
		<Table
			className={props.className}
			data={[props.coin]}
			headers={['RANK', 'SYMBOL', 'NAME', 'PRICE $USD', 'PECENT CHANGE 24H', 'MARKET CAP USD']}
		>
			{(rows: []) => {
				return (
					<>
						{rows?.map(({ id, rank, symbol, name, price_usd, percent_change_24h, market_cap_usd }) => {
							return (
								<tr style={{ color: 'gray' }} key={id}>
									<td><strong>{rank}</strong></td>
									<td><strong>{symbol}</strong></td>
									<td><strong>{name}</strong></td>
									<td><strong>${price_usd}</strong></td>
									<td><strong>${percent_change_24h}</strong></td>
									<td><strong>${market_cap_usd}</strong></td>
								</tr>
							)
						})}
					</>
				)

			}}
		</Table>
	)
}