//Writing api in this way is not secure
const API_KEY = '5986bf50-5086-41ce-b375-0221ec3c9b8a'

export const getNewsCategoriesEndpoint = (category, page, pageSize) => {
	return `https://content.guardianapis.com/search?api-key=${API_KEY}&show-fields=all&section=${category}&page=${page}&pageSize=${pageSize}`
}

export const getNewsDetailsEndpoint = newsId => {
	return `https://content.guardianapis.com/${newsId}?api-key=${API_KEY}&show-fields=all`
}
