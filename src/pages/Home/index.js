import React, { Fragment, useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListGifs from '../../components/ListGifs'
import { useGifs } from '../../hooks/useGifs'

const popularKeywords = ["doggy", "covid", "animals", "got"]

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

			<h3 className="page-title">Trending</h3>

			<ul>
				{popularKeywords.map(keyword => (
					<li key={keyword}>
						<Link to={`/search/${keyword}`}> 
							Gifs de {keyword}
						</Link>
					</li>
				))}
			</ul>

			{loading 
				? <p>Loading...</p>
				: <ListGifs gifs={gifs} />
			}

		</Fragment>
	)
}

export default Home
