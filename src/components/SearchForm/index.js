import { useForm } from 'hooks/useForm'
import React from 'react'
import useLocation from 'wouter/use-location'
import './SearchForm.css'


const ratings = ["g", "pg", "pg-13", "r"]


function SearchForm({ initialKeyword = "", initialRating = "g" }) {
	const { keyword, rating, updateKeyword, updateRating, resetSearch } = useForm({initialKeyword, initialRating})
	const [, pushPath] = useLocation();

	const handleInput = e => {
		updateKeyword(e.target.value)
	}
	
	const handleChangeRating = e => {
		updateRating(e.target.value)
	}

	const handleReset = e => {
		e.preventDefault();
		resetSearch()
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
