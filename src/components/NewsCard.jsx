import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsCard = props => {
	const { id, thumbnail, title, description } = props
	return (
		<Link to={`/news/${id}`} className='h-100'>
			<Card className='h-100 d-flex flex-column justify-content-between align-items-center'>
				<Card.Img src={thumbnail} variant='top' />
				<Card.Body>
					<Card.Title className='text-center'>{title}</Card.Title>
					<Card.Text className='text-center'>{description}</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	)
}

export default NewsCard
