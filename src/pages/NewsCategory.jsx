import React from 'react'
import { useParams } from 'react-router-dom'
import { getNewsList } from '../api/adaptors'
import { getNewsCategoriesEndpoint } from '../api/endpoints'
import Layout from '../components/Layout'
import { useFetch } from '../utils/hooks/useFetch'

const NewsCategory = () => {
	const { categoryId } = useParams()

	const newsCategoryEndpoint = getNewsCategoriesEndpoint()
	const data = useFetch(newsCategoryEndpoint)
	const adaptedNewsList = getNewsList(data)
	console.log(adaptedNewsList)
	return (
		<div>
			<Layout></Layout>
		</div>
	)
}

export default NewsCategory
