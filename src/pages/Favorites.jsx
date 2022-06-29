import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../components/Layout'
import NewsCardsList from '../components/NewsCardsList'
import { FavoritesContext } from '../store/Favorites/context'
import styles from './Favorites.module.css'

const Favorites = () => {
	const { favoritesState } = useContext(FavoritesContext)
	const { news } = favoritesState
	return (
		<div>
			<Layout>
				<Container className={`${styles.favoriteWrapper} my-5`}>
					<h1 className='mb-5 pt-3'>Stirile tale favorite</h1>
					{news.length === 0 ? (
						<p>Momentan nu ai nici o stire favorita!</p>
					) : (
						<NewsCardsList news={news} />
					)}
				</Container>
			</Layout>
		</div>
	)
}

export default Favorites
