import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks/useFetch'
import { getNewsDetails } from '../api/adaptors'
import { getNewsDetailsEndpoint } from '../api/endpoints'
import Layout from '../components/Layout'

const NewsDetails = () => {
	const { newsId } = useParams()

	const newsItemEndpoint = getNewsDetailsEndpoint(newsId)
	const newsDetails = useFetch(newsItemEndpoint)
	const adaptedNewsDetails = getNewsDetails(newsDetails)

	const { title, description, image, author, content, date } =
		adaptedNewsDetails

	return (
		<Layout>
			<Container className='my-5'>
				<Row>
					<Col xs={12} lg={8}>
						<h1>{title}</h1>
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}

export default NewsDetails
