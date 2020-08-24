import { useCallback } from "react";
import { useContext } from "react";
import Context from "context/UserContext";
import loginService from "services/login"
import addFavService from "services/addFav"
import { useState } from "react";

export default function useUser() {
	const { token, setToken, setFavs } = useContext(Context)
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
				window.sessionStorage.setItem("token", token)
				setState({
					loading: false,
					error: false
				})
				setToken(token)
			}).catch(err => {
				window.sessionStorage.removeItem("token", token)
				setState({
					loading: false,
					error: true
				})
				console.error(err);
			})
	}, [setToken, token])


	const addFav = useCallback(({id}) => {
		addFavService({id, token})
			.then(favs => setFavs(favs))
			.catch(err => console.error(err))
	}, [setFavs, token])


	const logout = useCallback(() => {
		window.sessionStorage.removeItem("token", token)
		setToken(null)
	}, [setToken, token])


	return {
		isLogged: Boolean(token),
		isLoginLoading: state.loading,
		loginError: state.error,
		addFav,
		login,
		logout
	}
}
