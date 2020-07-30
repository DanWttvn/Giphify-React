import getTrendingTerms from 'services/getTrendingTerms'
import React from 'react'
import { useEffect, useState } from 'react'
import Categories from 'components/Categories'


export default function TrendingTerms() {
	const [terms, setTerms] = useState([])

	useEffect(() => {
		getTrendingTerms()
			.then(terms => setTerms(terms))
			.catch(err => console.error(err))
	}, [])

	return (
		<Categories name="Trending" terms={terms} />
	)
}
