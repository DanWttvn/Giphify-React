import useUser from 'hooks/useUser'
import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import useLocation from 'wouter/use-location'


function Login() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [, pushLocation] = useLocation()
	const { isLogged, login, isLoginLoading, loginError } = useUser()


	useEffect(() => {
		if(isLogged) pushLocation("/")
	}, [isLogged, pushLocation])


	const handleSubmit = e => {
		e.preventDefault()
		login({ username, password })
	}

	if(isLoginLoading) return

	return (
		<Fragment>
			<h2>Login</h2>

			{isLoginLoading && <p>Loading...</p>}

			{!isLoginLoading && 
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} value={username} />
					<input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
					<button>Login</button>
				</form>
			}

			{loginError && <p>Invalid credentials</p>}
		</Fragment>
	)
}

export default Login
