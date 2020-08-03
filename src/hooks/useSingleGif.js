import { useGifs } from "hooks/useGifs"
import { useEffect, useState } from "react"
import getSingleGif from "services/getSingleGif"

export default function useSingleGif({ id }) {
	const { gifs } = useGifs()
	
	// If already been called
	const gifFromCache = gifs.find(gif => gif.id === id)

	const [gif, setGif] = useState(gifFromCache)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)


	// If entered from the url
	useEffect(() => {
		if(!gif) {
			setIsLoading(true)
			getSingleGif({id})
				.then(gif => {
					setGif(gif)
					setIsLoading(false)
				}).catch(err => {
					setIsError(true)
					setIsLoading(false)
				})
		}
	}, [gif, id])


	return {gif, isLoading, isError}
}
