import SearchForm from 'components/SearchForm'
import Spinner from 'components/Spinner/Spinner'
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import ListGifs from '../../components/ListGifs'
import TrendingTerms from '../../components/TrendingTerms'
import { useGifs } from '../../hooks/useGifs'


function Home() {

	// Last searched gifs
	const { loading, gifs } = useGifs()

	
	return (
		<Fragment>
			<Helmet>
				<title>Home | giphify</title>
			</Helmet>
			
			<header className="App-header">
				<SearchForm />
			</header>
			
			<div className="App-wrapper">
				<div className="App-main">
					<div className="App-results">
						<h3 className="page-title">Last Search</h3>
						<section className="gifs-section">
							{loading 
								? <Spinner />
								: <ListGifs gifs={gifs} />
							}
						</section>
					</div>
					<aside className="App-category">
						<TrendingTerms />
					</aside>
				</div>
			</div>
		</Fragment>
	)
}

export default Home
