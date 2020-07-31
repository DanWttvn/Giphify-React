import React, { Fragment, useCallback, useEffect, useRef } from 'react'
import ListGifs from 'components/ListGifs'
import { useGifs } from 'hooks/useGifs';
import Spinner from 'components/Spinner/Spinner';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import debounce from 'just-debounce-it'


function SearchResults({ params }) {
	
	const { keyword } = params
	// Custom hook to reutilize:
	const { loading, gifs, setPage } = useGifs({keyword})
	const externalRef = useRef()
	const { show } = useIntersectionObserver({ 
		externalRef: loading ? null : externalRef,
		once: false //we can control when it leaves the viewport
	})


	const handleNextPage = () => {
		setPage(prevPage => prevPage + 1)
	}

	// const handleNextPage = () => {
	// 	console.log("next page");
	// }

	// Infinite scroll
	// debounce: so it only renders once 
	// useCallback: Similar to useRef but with parameters to update (like useeffect)
	const debounceHandleNextPage = useCallback(debounce(() => 
		handleNextPage(), 200
	), [])
	

	useEffect(() => {
		if(show) debounceHandleNextPage()
	},[show, debounceHandleNextPage])


	return (
		<Fragment>
			<h3 className="page-title">{decodeURI(keyword)}</h3>
			
			{loading 
				? <Spinner/>
				: (
					<Fragment>
						<ListGifs gifs={gifs} />
						<div id="visor" ref={externalRef}></div>
					</Fragment>
				)}

			{/* <button onClick={handleNextPage} >Next Page</button> */}
		</Fragment>
	)
}

export default SearchResults


