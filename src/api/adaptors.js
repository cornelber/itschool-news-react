export const getNewsList = apiResponse => {
	if (!apiResponse || !apiResponse.response) {
		return []
	}

	const rawNewsList = apiResponse.response.results

	const adaptedNewsList = rawNewsList.map(news => {
		return {
			id: news.id,
			thumbnail: news.fields.thumbnail,
			title: news.webTitle,
			description: news.fields.trailText,
		}
	})

	return adaptedNewsList
}

export const getNewsDetails = apiResponse => {
	if (!apiResponse || !apiResponse.response) {
		return {}
	}

	const rawNewsDetails = apiResponse.response.content

	const adaptedNewsDetails = {
		title: rawNewsDetails.webTitle,
		description: rawNewsDetails.fields.trailText,
		image: rawNewsDetails.fields.main,
		author: rawNewsDetails.fields.byline,
		date: rawNewsDetails.webPublicationDate,
		content: rawNewsDetails.fields.body,
	}

	return adaptedNewsDetails
}
