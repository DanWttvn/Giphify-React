import React from 'react'
import { Link } from 'wouter'
import 'Header.css'

function Header() {
	return (
		<header className="login-header">
			<Link to="/login">Login</Link>
		</header>
	)
}

export default Header
