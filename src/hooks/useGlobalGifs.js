import React, { useContext } from 'react'
import GifsContext from '../context/GifsContext'

// Custom hook read only
export default function useGlobalGifs() {
	// const { gifs } = useContext(GifsContext) // I could also get the setGifs
	// return gifs

	return useContext(GifsContext).gifs // the same as above
}


