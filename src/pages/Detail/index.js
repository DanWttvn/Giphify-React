import React, { useContext, Fragment } from 'react'
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
			<h1>{params.id}</h1>
			<Gif {...gif} />
		</Fragment>
	)
}
