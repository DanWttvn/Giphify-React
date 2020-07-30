import React, { Fragment } from 'react'
import ListGifs from 'components/ListGifs'
import { useGifs } from 'hooks/useGifs';
import Spinner from 'components/Spinner/Spinner';


function SearchResults({ params }) {
	
	const { keyword } = params
	// Custom hook to reutilize:
	const { loading, gifs, setPage } = useGifs({keyword})

	const handleNextPage = () => {
		setPage(prevPage => prevPage + 1)
	}

	return (
		<Fragment>
			<h3 className="page-title">{decodeURI(keyword)}</h3>
			
			{loading 
				? <Spinner/>
				: <ListGifs gifs={gifs} />
			}

			<button onClick={handleNextPage} >Next Page</button>
		</Fragment>
	)
}

export default SearchResults


