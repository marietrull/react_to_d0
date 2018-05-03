import React, { Component } from 'react';
import Movie from '../Movies';

class MovieContainer extends Component {
	constructor (){
		super();

		this.state = {
			movies: ['Young Frankenstein', 'Blazing Saddles', 'History of the World Part One', 'The Producers']
		}
	}
	render () {
		return (
			<div>
				<span> Hi {this.props.username}</span>
				<Movie movies={this.state.movies}/>
			</div>
			)
	}
}

export default MovieContainer;

//make a movie component that will render our list of movies