import React from 'react'

export const Pagination = ({
	pages,
	onChangePage,
	highlightIndex,
	className,
}:
	{
		pages: number[] | undefined,
		onChangePage: React.MouseEventHandler,
		highlightIndex: number,
		className: string
	}) => {
	const renderPageNumbers = pages?.map((number, i) => {
		return (
			<li
				data-testid="list-pagination"
				key={number}
				id={number.toString()}
				onClick={onChangePage}
				style={{ color: highlightIndex === i ? '#7A7E83' : 'black', cursor: 'pointer' }}
			>
				{number}
			</li>
		);
	});

	return (
		<ul className={className}>
			{renderPageNumbers}
		</ul>
	)
}

