import useUser from 'hooks/useUser'
import React from 'react'
import useLocation from 'wouter/use-location'
import "./Fav.css"


export default function Fav({id}) {
	const { isLogged, addFav, favs } = useUser()
	const [, pushLocation] = useLocation()

	const isFav = favs && favs.some(favId => favId === id)

	const handleClick = () => {
		if(!isLogged) return pushLocation("/login")
		// isFav ? deleteFav({id}) : addFav({id})
		addFav({id})
	}

	const [label, emoji] = isFav ?
		["Remov from favorites", "❌"] 
		: ["Add to favorites", "💟"]


	return (
		<button className="Fav" onClick={handleClick}>
			<span aria-label={label} role="img">{emoji}</span>
		</button>
	)
}
