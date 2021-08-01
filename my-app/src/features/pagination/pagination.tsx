import React from 'react'
import styles from './Pagination.module.css'

export const Pagination = ({
	pages,
	onChangePage,
	highlightIndex
}:
	{
		pages: number[] | undefined,
		onChangePage: React.MouseEventHandler,
		highlightIndex: number
	}) => {
	const renderPageNumbers = pages?.map((number, i) => {
		return (
			<li
				data-testid="list-pagination"
				className="li"
				key={number}
				id={number.toString()}
				onClick={onChangePage}
				style={{ color: highlightIndex === i ? '#7A7E83' : 'black' }}
			>
				{number}
			</li>
		);
	});

	return (
		<ul className={styles.ul}>
			{renderPageNumbers}
		</ul>
	)
}

