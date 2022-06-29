export const initialState = {
	news: localStorage.getItem('news')
		? JSON.parse(localStorage.getItem('news'))
		: [],
}

export const favoriteReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITES': {
			const isInList = state.news.find(
				newsItem => newsItem.id === action.payload.id
			)

			if (isInList) {
				return state
			} else {
				localStorage.setItem(
					'news',
					JSON.stringify([...state.news, action.payload])
				)
				return {
					news: [...state.news, action.payload],
				}
			}
		}
		case 'REMOVE_FROM_FAVORITES': {
			const filteredNews = state.news.filter(
				newsItem => newsItem.id !== action.payload
			)
			localStorage.setItem('news', JSON.stringify(filteredNews))
			return {
				news: filteredNews,
			}
		}
		default: {
			return state
		}
	}
}
