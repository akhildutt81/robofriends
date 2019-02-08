import React from 'react';

const SearchBox=({searchChange})=>{
	return (
		<div className='pa2'>
			<input
				className='ba b--green pa2'
				type='search' 
				placeholder='robo search'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;