import React from 'react'
import { Pagination as BPagination } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import styles from './Pagination.module.css'

const Pagination = props => {
	const { currentPage, baseUrl } = props

	let navigate = useNavigate()

	const pages = [1, 2, 3, 4, 5]
	return (
		<div className='d-flex justify-content-center'>
			<BPagination className={styles.pagination}>
				{pages.map(page => (
					<BPagination.Item
						key={page}
						active={page === Number(currentPage)}
						id={
							page === Number(currentPage)
								? styles.paginationActive
								: null
						}
						onClick={() => {
							navigate(`${baseUrl}?page=${page}`)
							window.scrollTo({
								top: 0,
								behavior: 'smooth',
							})
						}}
					>
						{page}
					</BPagination.Item>
				))}
			</BPagination>
		</div>
	)
}

export default Pagination
