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

// React.memo: compares the previous and the new state and, if its the same, it doesn't render the component again (in home or whenever I use it)
export default React.memo(SearchForm)
