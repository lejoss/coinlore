import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CoinPage } from '../features/coin/Coin'

test('user can type inside input', () => {
	render(<CoinPage />)
	const inputValue = 'test'

	const inputEl = screen.getByTestId(/user-input/i)
	expect(inputEl).toBeInTheDocument()

	userEvent.type(inputEl, inputValue)
	expect(inputEl).toHaveValue(inputValue)
});