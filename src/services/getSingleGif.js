import { api_key, api_URL } from "./settings"

export default function getSingleGif ({ id }) { // si no le paso nada, default is {}. si lo que le paso no es keyword, será "gif"

	const apiURL = `${api_URL}/gifs/${id}?api_key=${api_key}` // offset is where it starts to count (for pagination)

	return (
		fetch(apiURL)
			.then(res => res.json())
			.then(response => {
				const { data } = response
				const { images, title, id } = data
				const { url } = images.downsized_medium
				return {title, id, url}
			})
	)
}