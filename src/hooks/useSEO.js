import { useEffect, useRef } from 'react'

export default function useSEO({ title }) {
	const prevTitleRef = useRef(document.title)

	useEffect(() => {
		const prevTitle = prevTitleRef.current
		if(title) {
			document.title = `${title} | giphify`
		}

		// When it unmounts and before the useEffect renders again, renders the previous title. Resets the effect
		return () => {
			document.title = prevTitle
		}
	}, [title])
}


