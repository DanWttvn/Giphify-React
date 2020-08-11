import React from 'react'
import { useReducer } from 'react'
import useLocation from 'wouter/use-location'
import './SearchForm.css'

//* https://www.youtube.com/watch?v=Wjy_nlYXTik&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=4
// 44:00

const ratings = ["g", "pg", "pg-13", "r"]

const reducer = (state, action) => {
	return {
		...state,
		keyword: action.payload
	}
}

function SearchForm({ initialKeyword = "", initialRating = "g" }) {
	// const [keyword, setKeyword] = useState(decodeURI(initialKeyword))
	// const [rating, setRating] = useState(initialRating)

	const [currentPath, pushPath] = useLocation();


	// Reducer
	const [state, dispatch] = useReducer(reducer, {
		keyword: decodeURI(initialKeyword),
		rating: initialRating
	})

	const { keyword, rating } = state


	const handleInput = e => {
		dispatch({type: "update_keyword", payload: e.target.value})
	}
	
	const handleChangeRating = e => {
		dispatch({type: "update_rating", payload: e.target.value})
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
			<button>Search</button>
		</form>
	)
}

// React.memo: compares the previous and the new state and, if its the same, it doesn't render the component again (in home or whenever I use it)
export default React.memo(SearchForm)
