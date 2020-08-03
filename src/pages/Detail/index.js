import Spinner from 'components/Spinner/Spinner';
import useSingleGif from 'hooks/useSingleGif';
import useSEO from 'hooks/useSEO';
import React, { Fragment } from 'react'
import { Redirect } from 'wouter';
import Gif from '../../components/Gif';
// import StaticContext from '../../context/StaticContext'
// import useGlobalGifs from '../../hooks/useGlobalGifs';


export default function Detail({ params }) {
	// const staticContext = useContext(StaticContext)
	// console.log(staticContext);

	// Custom hook read only
	// const gifs = useGlobalGifs()
	
	let { gif, isLoading, isError } = useSingleGif({id: params.id})
	const title = gif ? gif.title : ""
	useSEO({ title })

	if(isError) return <Redirect to="/404" />
	if (!gif) return null

	return (
		<Fragment>
			{ isLoading ? (
				<Spinner />
			):(
				<Fragment>
					<h3 className="page-title">{gif.title}</h3>
					<Gif {...gif} />
				</Fragment>
			)}
		</Fragment>
	)
}
