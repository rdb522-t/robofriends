import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	console.log('searchbox');
	return (
		<div className="pa2">
			<input
				aria-label="search robots"
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='Search Robots'
				onChange={searchChange}
			></input>
		</div>
	)
}

export default SearchBox;