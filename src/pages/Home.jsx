import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { getNewsList } from '../api/adaptors'
import { getNewsCategoriesEndpoint } from '../api/endpoints'
import { FavoritesContext } from '../store/Favorites/context'
import { useFetch } from '../utils/hooks/useFetch'
import Layout from '../components/Layout'
import NewsCardsList from '../components/NewsCardsList'

const Home = () => {
	const { favoritesState } = useContext(FavoritesContext)
	const { news } = favoritesState

	const newsTechnologyEndpoint = getNewsCategoriesEndpoint('technology', 1, 6)
	const newsFootballEndpoint = getNewsCategoriesEndpoint('football', 1, 6)
	const newsBusinessEndpoint = getNewsCategoriesEndpoint('business', 1, 6)
	const newsFilmEndpoint = getNewsCategoriesEndpoint('film', 1, 6)

	const technologyData = useFetch(newsTechnologyEndpoint)
	const footballData = useFetch(newsFootballEndpoint)
	const businessData = useFetch(newsBusinessEndpoint)
	const filmData = useFetch(newsFilmEndpoint)

	const adaptedTechnologyList = getNewsList(technologyData)
	const adaptedFootballList = getNewsList(footballData)
	const adaptedBusinessList = getNewsList(businessData)
	const adaptedFilmList = getNewsList(filmData)

	console.log(news < 3 ? news : news.slice(0, 3))
	return (
		<div>
			<Layout>
				<Container>
					<div>
						<Link to='/category/technology'>
							<h1 className='text-center my-5'>Tech</h1>
						</Link>
						<NewsCardsList news={adaptedTechnologyList} />
						<p className='text-center'>
							Vezi toate știrile legate de tehnologie în secțiunea{' '}
							<Link
								to='/category/technology'
								className='text-secondary'
							>
								Tech
							</Link>
						</p>
					</div>
					<div>
						<Link to='/category/football'>
							<h1 className='text-center my-5'>Fotbal</h1>
						</Link>
						<NewsCardsList news={adaptedFootballList} />
						<p className='text-center'>
							Vezi toate știrile legate de tehnologie în secțiunea{' '}
							<Link
								to='/category/football'
								className='text-secondary'
							>
								Fotbal
							</Link>
						</p>
					</div>
					<div>
						<Link to='/category/business'>
							<h1 className='text-center my-5'>Afaceri</h1>
						</Link>
						<NewsCardsList news={adaptedBusinessList} />
						<p className='text-center'>
							Vezi toate știrile legate de tehnologie în secțiunea{' '}
							<Link
								to='/category/business'
								className='text-secondary'
							>
								Afaceri
							</Link>
						</p>
					</div>
					<div>
						<Link to='/category/film'>
							<h1 className='text-center my-5'>Film</h1>
						</Link>
						<NewsCardsList news={adaptedFilmList} />
						<p className='text-center'>
							Vezi toate știrile legate de tehnologie în secțiunea{' '}
							<Link
								to='/category/film'
								className='text-secondary'
							>
								Film
							</Link>
						</p>
					</div>
					<div>
						<Link to='/favorites'>
							<h1 className='text-center my-5'>Favorite</h1>
						</Link>
						{news.length === 0 ? (
							<div className='text-center'>
								<p>
									Vrei să îți salvezi știrile favorite pentru
									a le reciti mai încolo?
								</p>
								<p>
									În cadrul fiecărei știri găsești un buton
									prin care poți adăuga știrea la favorite.
								</p>
								<p>
									Vizitează secțiunea{' '}
									<Link
										to='/favorites'
										className='text-secondary'
									>
										Favorite
									</Link>{' '}
									pentru a vedea știrile adăugate.
								</p>
							</div>
						) : (
							<div className='text-center'>
								{news.length <= 3 ? (
									''
								) : (
									<p>
										Vezi mai multe știri adăugate la{' '}
										<Link
											to='/favorites'
											className='text-secondary'
										>
											Favorite
										</Link>
									</p>
								)}
								<NewsCardsList
									news={
										news.length <= 3
											? news
											: news.slice(0, 3)
									}
								/>
							</div>
						)}
					</div>
				</Container>
			</Layout>
		</div>
	)
}

export default Home
