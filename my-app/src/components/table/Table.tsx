type TableProps = {
	data: [],
	headers: string[],
	onSelectRow: (coinId: string) => void
}
export function Table(props: TableProps) {
	return (
		<table>
			<thead>
				<tr>
					{props.headers?.map(h => <th>{h}</th>)}
				</tr>
			</thead>
			<tbody>
				{props.data?.map(({ id, symbol, name, price_usd }) => (
					<tr onClick={() => props.onSelectRow(id)}>
						<td>{symbol}</td>
						<td>{name}</td>
						<td>{price_usd}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}