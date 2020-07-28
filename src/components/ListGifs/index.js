import React from 'react'
import Gif from '../Gif'
import './ListGifs.css'


export default function ListGifs ({ gifs }) {
	return (
		<div className="ListGifs">
			{gifs.map(({ title, id, url })=> (
				<Gif 
					title={title} 
					url={url} 
					id={id} 
					key={id}
				/>
			))}
		</div>
	)
}
