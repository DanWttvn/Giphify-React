import { api_key, api_URL } from "./settings"

export default function getGifs ({limit = 25, keyword = "gif", page = 0} = {}) { // si no le paso nada, default is {}. si lo que le paso no es keyword, será "gif"

	const apiURL = `${api_URL}/gifs/search?api_key=${api_key}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g&lang=en` // offset is where it starts to count (for pagination)

	return (
		fetch(apiURL)
			.then(res => res.json())
			.then(response => {
				const { data = [] } = response // = [] default value in case it returns undefined
				const gifs = data.map(img => {
					const { images, title, id } = img
					const { url } = images.downsized_medium
					return {title, id, url}
				})
				return gifs
			}).catch(err => console.error(err))
	)
}