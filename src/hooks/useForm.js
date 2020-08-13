import { useReducer } from 'react'
import { UPDATE_KEYWORD, UPDATE_RATING, RESET_SEARCH } from 'services/actionTypes'



const reducer = (state, {type, payload}) => {
	switch (type) {
		case UPDATE_KEYWORD:
			return {
				...state,
				keyword: payload
			}
		
		case UPDATE_RATING:
			return {
				...state,
				rating: payload
			}

		case RESET_SEARCH:
			return {
				...state,
				keyword: "",
				rating: "g",
			}
		default:
			return state
	}
}


export const useForm = ({ initialKeyword, initialRating }) => {
	// Centralised state
	const [state, dispatch] = useReducer(reducer, {
		keyword: decodeURI(initialKeyword),
		rating: initialRating
	})

	const { keyword, rating } = state

	const updateKeyword = keyword => {
		dispatch({type: UPDATE_KEYWORD, payload: keyword})
	}

	const updateRating = rating => {
		dispatch({type: UPDATE_RATING, payload: rating})
	}

	const resetSearch = () => {
		dispatch({type: RESET_SEARCH})
	}

	return {
		keyword, 
		rating,
		updateKeyword,
		updateRating,
		resetSearch
	}
}