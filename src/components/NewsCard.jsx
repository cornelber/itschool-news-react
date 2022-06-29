import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeFromFavorites } from '../store/Favorites/actions'
import { FavoritesContext } from '../store/Favorites/context'
import styles from './NewsCard.module.css'

const NewsCard = props => {
	const { favoritesDispatch } = useContext(FavoritesContext)

	const { id, thumbnail, title, description, hasCloseButton } = props

	const handleRemoveFromFavorites = () => {
		const actionResult = removeFromFavorites(id)
		favoritesDispatch(actionResult)
	}

	return (
		<Card className='h-100 d-flex flex-column justify-content-between align-items-center'>
			<Link to={`/news/${id}`} className='h-100'>
				<Card.Img src={thumbnail} variant='top' />
				<Card.Body>
					<Card.Title className='text-center'>{title}</Card.Title>
					<Card.Text className='text-center'>{description}</Card.Text>
				</Card.Body>
			</Link>
			{hasCloseButton && (
				<Button
					onClick={handleRemoveFromFavorites}
					id={styles.newsCardButton}
					variant='light'
				>
					<span className='material-icons text-dark'>close</span>
				</Button>
			)}
		</Card>
	)
}

export default NewsCard
