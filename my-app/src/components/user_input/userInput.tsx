type UserInputProps = {
	value: any, onChange: any
}
export const UserInput = (props: UserInputProps) => {
	return (
		<label>
			Search by Coin
			<input type="text" value={props.value} onChange={props.onChange} />
		</label>
	)
}