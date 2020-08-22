import useUser from 'hooks/useUser'
import React from 'react'
import { Link } from 'wouter'
import './Header.css'

function Header() {
	const { isLogged, logout } = useUser()

	return (
		<header className="login-header">
			{ isLogged ? (
				<button onClick={logout}>Logout</button>
			):(
				<Link to="/login">Login</Link>
			)}
		</header>
	)
}

export default Header
