import React, { Component } from 'react';

const Movie = (props) => {

	const movieList = props.movies.map((movie,i) => {
		return <li key={i}>{movie}</li>	
	})

	return(
		<ul>
		{movieList}
		</ul>
	)
}

export default Movie; 

