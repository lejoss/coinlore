type TableProps = {
	data?: any[] | null | undefined,
	headers: string[],
	className?: string,
	children?: any,
}
export function Table(props: TableProps) {
	const rows = props?.data?.map(({ id, rank, symbol, name, price_usd, percent_change_24h, market_cap_usd }) => {
		return {
			id,
			rank,
			symbol,
			name,
			price_usd,
			percent_change_24h,
			market_cap_usd
		}
	})

	return (
		<table className={props.className}>
			<thead>
				<tr>
					{props.headers?.map((h, i) => <th style={{ color: 'steelblue' }} key={i}>{h}</th>)}
				</tr>
			</thead>
			<tbody>
				{props.children(rows)}
			</tbody>
		</table>
	)
}
