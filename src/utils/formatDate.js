export const formatDate = date => {
	const currentDate = new Date(date)

	let day = currentDate.getDate()
	if (day < 10) day = '0' + day

	let month = currentDate.getMonth() + 1
	if (month < 10) month = '0' + month

	let year = currentDate.getFullYear()

	const formattedDate = `${day}/${month}/${year}`

	return formattedDate
}
