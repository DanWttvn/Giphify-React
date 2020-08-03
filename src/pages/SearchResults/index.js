import React, { Fragment, useCallback, useEffect, useRef } from 'react'
import ListGifs from 'components/ListGifs'
import { useGifs } from 'hooks/useGifs';
import Spinner from 'components/Spinner/Spinner';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import debounce from 'just-debounce-it'
import useSEO from 'hooks/useSEO';
import { Helmet } from 'react-helmet';


function SearchResults({ params }) {
	
	const { keyword } = params
	// Custom hook to reutilize:
	const { loading, gifs, setPage } = useGifs({keyword})
	const externalRef = useRef()
	const { show } = useIntersectionObserver({ 
		externalRef: loading ? null : externalRef,
		once: false //we can control when it leaves the viewport
	})

	const title = keyword ? decodeURI(keyword) : ""

	// Infinite scroll
	// debounce: so it only renders once 
	// useCallback: Similar to useRef but with parameters to update (like useeffect). In this case I need to conserve thissame fonction instead of re-buiilding it every time the component updates. I need it for the deounce to know how many times its been already executed
	const debounceHandleNextPage = useCallback(debounce(() => 
		setPage(prevPage => prevPage + 1), 200
	), []) // if [], the funciton is only 1 time created
	

	useEffect(() => {
		if(show) debounceHandleNextPage()
	},[show, debounceHandleNextPage])


	return (
		<Fragment>
			<Helmet>
				<title>{title} results | giphify</title>
				<meta name="description" content="Search results" />
			</Helmet>
			<h3 className="page-title">{decodeURI(keyword)}</h3>
			
			{loading 
				? <Spinner/>
				: (
					<Fragment>
						<ListGifs gifs={gifs} />
						<div id="visor" ref={externalRef}></div>
					</Fragment>
				)
			}
		</Fragment>
	)
}

export default SearchResults


