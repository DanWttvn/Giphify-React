// CUSTOM HOOK // Must begin with "use...."
import { useContext, useEffect, useState } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'



export function useGifs({ keyword } = { keyword: null }) { // :null in case we don't want to search for any specific keyword

	const [loading, setLoading] = useState(false)

	// With local state:
	// const [gifs, setGifs] = useState([])
	// Gifs = [{ title, id, url }]

	// With global state:
	const {gifs, setGifs} = useContext(GifsContext)

	
	useEffect(() => {
		setLoading(true)

		const searchKeyword = keyword || localStorage.getItem("lastKeyword") || "random"

		getGifs({ keyword: searchKeyword })
			.then(gifs => {
				setGifs(gifs)
				setLoading(false)
				localStorage.setItem("lastKeyword", keyword) // Save last search
			})
	}, [keyword, setGifs])

	return {loading, gifs}
}

