import React from 'react'
import { useReducer } from 'react'
import useLocation from 'wouter/use-location'
import './SearchForm.css'
import { UPDATE_KEYWORD, UPDATE_RATING, RESET_SEARCH } from 'services/actionTypes'

//* https://www.youtube.com/watch?v=Wjy_nlYXTik&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=4
// 44:30

const ratings = ["g", "pg", "pg-13", "r"]

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

function SearchForm({ initialKeyword = "", initialRating = "g" }) {
	const [currentPath, pushPath] = useLocation();

	// Centralised state
	const [state, dispatch] = useReducer(reducer, {
		keyword: decodeURI(initialKeyword),
		rating: initialRating
	})

	const { keyword, rating } = state


	const handleInput = e => {
		dispatch({type: UPDATE_KEYWORD, payload: e.target.value})
	}
	
	const handleChangeRating = e => {
		dispatch({type: UPDATE_RATING, payload: e.target.value})
	}

	const handleReset = e => {
		e.preventDefault();
		dispatch({type: RESET_SEARCH})
	}

	const handleSubmit = e => {
		e.preventDefault();
		pushPath(`/search/${keyword}/${rating}`)
	}

	return (
		<form className="SearchForm" onSubmit={handleSubmit}>
			<input placeholder="Search..." onChange={handleInput} type="text" value={keyword} />
			<select onChange={handleChangeRating} value={rating}>
				<option disabled>Rating Type</option>
				{ratings.map(rating => <option key={rating}>{rating}</option>)}
			</select>
			<button onClick={handleReset}>Reset</button>
			<button>Search</button>
		</form>
	)
}

// React.memo: compares the previous and the new state and, if its the same, it doesn't render the component again (in home or whenever I use it)
export default React.memo(SearchForm)
