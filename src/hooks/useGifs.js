// CUSTOM HOOK // Must begin with "use...."
import { useContext, useEffect, useState } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'



export function useGifs({ keyword, rating } = { keyword: null }) { // :null in case we don't want to search for any specific keyword
	const [loading, setLoading] = useState(false)
	const [, setLoadingNextPage] = useState(false)
	const [page, setPage] = useState(0)
	const searchKeyword = keyword || localStorage.getItem("lastKeyword") || "random"

	// With local state:
	// const [gifs, setGifs] = useState([])
	// Gifs = [{ title, id, url }]

	// With global state:
	const {gifs, setGifs} = useContext(GifsContext)
	
	// call to the api and set gifs in the state
	useEffect(() => {
		setLoading(true)
		getGifs({ keyword: searchKeyword, rating })
			.then(gifs => {
				setGifs(gifs)
				setLoading(false)
				localStorage.setItem("lastKeyword", keyword) // Save last search
			})
	}, [keyword, searchKeyword, setGifs, rating])

	// Infinite Scroll
	useEffect(() => {
		if(page === 0) return

		setLoadingNextPage(true)
		getGifs({ keyword: searchKeyword, rating, page })
			.then(nextGifs => {
				// update state with a function that gifs you the previus vlues
				setGifs(prevGifs => prevGifs.concat(nextGifs))
				setLoadingNextPage(false)
			})
	}, [page, setGifs, searchKeyword, rating])

	return {loading, gifs, setPage}
}

