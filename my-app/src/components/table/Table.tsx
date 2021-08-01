type TableProps = {
	data: any[] | null,
	headers: string[],
	onSelectRow: (coinId: string) => void,
	className: string,
}
export function Table(props: TableProps) {
	return (
		<table className={props.className}>
			<thead>
				<tr>
					{props.headers?.map((h, i) => <th style={{ color: 'steelblue' }} key={i}>{h}</th>)}
				</tr>
			</thead>
			<tbody>
				{props.data?.map(({ id, symbol, name, price_usd }) => (
					<tr style={{ cursor: 'pointer', color: 'gray' }} key={id} onClick={() => props.onSelectRow(id)}>
						<td><strong>{symbol}</strong></td>
						<td><strong>{name}</strong></td>
						<td><strong>${price_usd}</strong></td>
					</tr>
				))}
			</tbody>
		</table>
	)
}