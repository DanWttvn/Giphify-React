import React from "react"
import { Link } from "wouter"
import Fav from "components/Fav"
import './Gif.css'


function Gif({ title, id, url }) {
	return (
		<div className="Gif">
			<div className="gif-buttons">
				<Fav id={id} />
			</div>
			<Link to={`/gif/${id}`} className="gif-link">
				<h4>{title}</h4>
				<img loading="lazy" src={url} alt={title} />
			</Link>
		</div>
	)
}

export default React.memo(Gif, (prevProps, nextProps) => {
	// si tiene el mismo id, en este caso, el resto tmb va a ser igual. I can controll the memo this way
	return prevProps.id === nextProps.id
})