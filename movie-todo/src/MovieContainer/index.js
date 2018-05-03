import React, { Component } from 'react';
import Movie from '../Movies';
import CreateMovie from '../CreateMovie';

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
				<CreateMovie />
			</div>
			)
	}
}

export default MovieContainer;
