import Spinner from 'components/Spinner/Spinner'
import React, { Fragment, useState } from 'react'
import { useLocation } from 'wouter'
import ListGifs from '../../components/ListGifs'
import TrendingTerms from '../../components/TrendingTerms'
import { useGifs } from '../../hooks/useGifs'



function Home() {

	const [keyword, setKeyword] = useState("")
	const [currentPath, pushPath] = useLocation()

	// Trending
	const { loading, gifs } = useGifs()

	const handleSubmit = e => {
		e.preventDefault();
		pushPath(`search/${keyword}`)
	}

	const handleInput = e => {
		setKeyword(e.target.value)
	}

	return (
		<Fragment>

			<form onSubmit={handleSubmit}>
				<input placeholder="Search..." onChange={handleInput} type="text" value={keyword}/>
			</form>

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
