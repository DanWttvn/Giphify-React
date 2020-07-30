import { api_key, api_URL } from "./settings"

export default function getTrendingTerms () { // si no le paso nada, default is {}. si lo que le paso no es keyword, será "gif"

	const apiURL = `${api_URL}/trending/searches?api_key=${api_key}`

	return (
		fetch(apiURL)
			.then(res => res.json())
			.then(response => {
				const { data = [] } = response // = [] default value in case it returns undefined
				return data
			}).catch(err => console.error(err))
	)
}