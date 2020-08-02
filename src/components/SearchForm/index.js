import React, { useState } from 'react'

function SearchForm({ onSubmit }) {
	const [keyword, setKeyword] = useState("")

	const handleInput = e => {
		setKeyword(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit({keyword})
	}

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="Search..." onChange={handleInput} type="text" value={keyword}/>
			<button>Search</button>
		</form>
	)
}

export default SearchForm
