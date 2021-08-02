import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from './pagination'

test('user can use pagination to change page and see active index', () => {
	const onChangePage = jest.fn()
	const { rerender } = render(<Pagination pages={[1, 2]} onChangePage={onChangePage} highlightIndex={0} />)

	expect(screen.getByText('1')).toBeInTheDocument()
	expect(screen.getByText('2')).toBeInTheDocument()

	expect(screen.getByText('1')).toHaveTextContent('1')
	expect(screen.getByText('2')).toHaveTextContent('2')

	expect(screen.getByText('1')).toHaveStyle('color: #7A7E83;')
	expect(screen.getByText('2')).toHaveStyle('color: black;')

	userEvent.click(screen.getByText('2'))
	expect(onChangePage).toHaveBeenCalledTimes(1)

	rerender(<Pagination pages={[1, 2]} onChangePage={onChangePage} highlightIndex={1} />)

	expect(screen.getByText('2')).toHaveStyle('color: black;')
	expect(screen.getByText('1')).toHaveStyle('color: #7A7E83;')

})