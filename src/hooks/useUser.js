import { useCallback } from "react";
import { useContext } from "react";
import Context from "context/UserContext";
import loginService from "services/login"
import { useState } from "react";

export default function useUser() {
	const { token, setToken } = useContext(Context)
	const [state, setState] = useState({
		loading: false,
		error: false
	})

	const login = useCallback(({username, password}) => {
		setState({
			loading: true,
			error: false
		})
		loginService({username, password})
			.then(token => {
				setState({
					loading: false,
					error: false
				})
				setToken(token)
			}).catch(err => {
				setState({
					loading: false,
					error: true
				})
				console.error(err);
			})
	}, [setToken])

	const logout = useCallback(() => {
		setToken(null)
	}, [setToken])

	return {
		isLogged: Boolean(token),
		isLoginLoading: state.loading,
		loginError: state.error,
		login,
		logout
	}
}
