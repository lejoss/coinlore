type TitleProps = {
	text: string,
	className: string
}
export const Title = (props: TitleProps) => {
	return (
		<h1 className={props.className}>
			{props.text}
		</h1>
	)
}