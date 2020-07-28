import React, { Fragment } from 'react'
import ListGifs from '../../components/ListGifs'
import { useGifs } from '../../hooks/useGifs';


function SearchResults({ params }) {
	
	const { keyword } = params
	// Custom hook to reutilize:
	const { loading, gifs } = useGifs({keyword})

	return (
		<Fragment>
			{loading 
				? <p>Loading...</p>
				: <ListGifs gifs={gifs} />
			}
		</Fragment>
	)
}

export default SearchResults


