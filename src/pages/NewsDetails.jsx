import React, { useContext, useState } from 'react'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks/useFetch'
import { getNewsDetails } from '../api/adaptors'
import { getNewsDetailsEndpoint } from '../api/endpoints'
import { formatDate } from '../utils/formatDate'
import { FavoritesContext } from '../store/Favorites/context'
import { addToFavorites, removeFromFavorites } from '../store/Favorites/actions'
import Layout from '../components/Layout'
import styles from './NewsDetails.module.css'

const NewsDetails = () => {
	const { favoritesState, favoritesDispatch } = useContext(FavoritesContext)
	const [alertVision, setAlertVision] = useState(false)

	const { newsId, '*': RestOfURL } = useParams()
	const completeNewsId = `${newsId}/${RestOfURL}`
	const newsItemEndpoint = getNewsDetailsEndpoint(completeNewsId)
	const newsDetails = useFetch(newsItemEndpoint)
	const adaptedNewsDetails = getNewsDetails(newsDetails)
	const { id, title, description, image, author, content, date } =
		adaptedNewsDetails

	const formattedDate = formatDate(date)

	const isFavorite = id => {
		const newsFound = favoritesState.news.find(
			newsItem => newsItem.id === id
		)
		return newsFound ? true : false
	}

	const handleFavoritesClick = () => {
		const newsFound = favoritesState.news.find(
			newsItem => newsItem.id === id
		)

		const newsObj = {
			id: completeNewsId,
			hasCloseButton: true,
			...adaptedNewsDetails,
		}

		const actionResult = newsFound
			? removeFromFavorites(id)
			: addToFavorites(newsObj)
		favoritesDispatch(actionResult)

		setAlertVision(true)
	}

	setTimeout(() => {
		setAlertVision(false)
	}, 2000)

	return (
		<Layout>
			<Container className={`${styles.newsDetails} my-5`}>
				<Row className='d-flex justify-content-center'>
					<Col xs={12} lg={8}>
						<h1 className='mb-5 pt-5'>{title}</h1>
						<p className='fw-bold'>{description}</p>
						<div
							className='mb-4'
							dangerouslySetInnerHTML={{ __html: image }}
						/>
						<div className='d-flex justify-content-between align-items-center mb-4'>
							<div className='fw-bold'>
								<p>{author}</p>
								<p className='mb-0'>{formattedDate}</p>
							</div>
							<Button
								variant={
									isFavorite(id)
										? 'btn btn-outline-danger'
										: 'btn btn-primary'
								}
								onClick={handleFavoritesClick}
							>
								{isFavorite(id)
									? 'Sterge din Favorite'
									: 'Adauga in Favorite'}
							</Button>
						</div>
						<div dangerouslySetInnerHTML={{ __html: content }} />
					</Col>
				</Row>
			</Container>
			{alertVision ? (
				<div className='alertContainer'>
					<Alert
						id='alertNotification'
						variant={isFavorite(id) ? 'success' : 'danger'}
					>
						{isFavorite(id)
							? 'Succes! Poți vedea știrea accesând secțiunea Favorite'
							: 'Succes! Ai șters știrea din secțiunea Favorite'}
					</Alert>
				</div>
			) : (
				''
			)}
		</Layout>
	)
}

export default NewsDetails
