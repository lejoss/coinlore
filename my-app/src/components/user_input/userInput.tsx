type UserInputProps = {
	value: any, onChange: any
}
export const UserInput = (props: UserInputProps) => {
	return (
		<div style={{ padding: '1em 2em' }}>
			<label>
				<strong>SEARCH COIN</strong>
			<input style={{ margin: '0 1em'}} type="text" value={props.value} onChange={props.onChange} />
			</label>
		</div>

	)
}