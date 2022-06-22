import { useEffect } from 'react'
import { useState } from 'react'

export const useFetch = url => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch(url).then(res =>
			res.json().then(jsonData => {
				setData(jsonData)
			})
		)
	}, [url])

	return data
}
