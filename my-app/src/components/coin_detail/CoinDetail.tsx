export type CoinDetailsProps = {
	coin: {
		symbol: string,
		name: string,
		rank: number,
		price_usd: string,
		percent_change_24h: string,
		market_cap_usd: string
	} | null,
}
export function CoinDetail(props: CoinDetailsProps) {
	return (
		<div>
			<span>{props?.coin?.rank}</span>
			<span>{props?.coin?.symbol}</span>
			<span>{props?.coin?.name}</span>
			<span>{props?.coin?.price_usd}</span>
			<span>{props?.coin?.percent_change_24h}</span>
			<span>{props?.coin?.market_cap_usd}</span>
		</div>
	)
}