import Spinner from 'components/Spinner/Spinner';
import useSingleGif from 'hooks/useSingleGif';
import React, { Fragment } from 'react'
import { Redirect } from 'wouter';
import Gif from '../../components/Gif';
import { Helmet } from 'react-helmet';


export default function Detail({ params }) {
	
	let { gif, isLoading, isError } = useSingleGif({id: params.id})
	const title = gif ? gif.title : ""


	if(isError) return <Redirect to="/404" />
	if (!gif) return null

	return (
		<Fragment>
			{ isLoading ? (
				<Fragment>
					<Helmet >
						<title>Loading...</title>
					</Helmet>
					<Spinner />
				</Fragment>
			):(
				<Fragment>
					<Helmet>
						<title>{title} | giphify</title>
					</Helmet>
					<h3 className="page-title">{gif.title}</h3>
					<Gif {...gif} />
				</Fragment>
			)}
		</Fragment>
	)
}
