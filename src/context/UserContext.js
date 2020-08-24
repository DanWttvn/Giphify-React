import React, { useState } from 'react'
import { useEffect } from 'react'
import getFavs from 'services/getFavs'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
	const [favs, setFavs] = useState([])
	const [token, setToken] = useState(
		// in a function so the line doesnt render every time the comopnent rerenders (wouldnt update the state tho)
		() => window.sessionStorage.getItem("token")
	)


	useEffect(() => {
		if(!token) return setFavs([])
		getFavs({token})
			.then(setFavs) // = favs => setFavs(favs)
	}, [token])

	return (
		<Context.Provider value={{
			token, 
			setToken,
			favs,
			setFavs
		}}>
			{children}
		</Context.Provider>
	)
}

export default Context