import SearchForm from 'components/SearchForm'
import Spinner from 'components/Spinner/Spinner'
import React, { Fragment, useCallback, useState } from 'react'
import { useLocation } from 'wouter'
import ListGifs from '../../components/ListGifs'
import TrendingTerms from '../../components/TrendingTerms'
import { useGifs } from '../../hooks/useGifs'



function Home() {
	const [currentPath, pushPath] = useLocation()

	// Trending
	const { loading, gifs } = useGifs()

	const handleSubmit = useCallback(({keyword}) => {
		pushPath(`search/${keyword}`)
	}, [pushPath])
	
	return (
		<Fragment>
			<SearchForm onSubmit={handleSubmit} />
			<h3 className="page-title">Last Search</h3>
			<section className="gifs-section">
				{loading 
					? <Spinner />
					: <ListGifs gifs={gifs} />
				}
			</section>
			<aside>
				<TrendingTerms />
			</aside>
		</Fragment>
	)
}

export default Home
