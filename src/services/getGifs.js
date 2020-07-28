const apiKey = "VcYFPdAufJrVbwBuyx78h0mRXRu4VRIn"

export default function getGifs ({keyword = "gif"} = {}) { // si no le paso nada, default is {}. si lo que le paso no es keyword, será "gif"

	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

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