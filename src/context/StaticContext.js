import React from 'react'

// A este objeto vamos a poder acceder desde cualquier sitio
const Context = React.createContext({
	// Initial value here is if you dont have acces to the provider
	name: "this component doesnt have acess to the provider",
	suscribeteAlCanal: true
})

export default Context

