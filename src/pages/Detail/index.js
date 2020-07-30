import React, { Fragment } from 'react'
import Gif from '../../components/Gif';
// import StaticContext from '../../context/StaticContext'
import useGlobalGifs from '../../hooks/useGlobalGifs';


export default function Detail({ params }) {
	// const staticContext = useContext(StaticContext)
	// console.log(staticContext);

	// Custom hook read only
	const gifs = useGlobalGifs()
	
	let gif = {}
	if(gifs) {
		gif = gifs.find(gif => gif.id === params.id)
	} else {
		// Call the api with the param.id
	}

	return (
		<Fragment>
			<h3 className="page-title">{gif?.title}</h3>
			<Gif {...gif} />
		</Fragment>
	)
}
