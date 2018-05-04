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
	// normally e is the first parameter passed.     
	addMovie = (movie, e) => {
		//Stop page from refreshing every time the form is submitted
		e.preventDefault();
		console.log(movie, ' this is the move')
		console.log(e.currentTarget, ' this is the currentTarget')
		console.log(e.target, ' this is e.target')
		this.setState({movies: [...this.state.movies, movie]})	
	}
	removeMovie = (e) => {
		console.log('Delete Clicked')
		console.log(e.currentTarget.id)

		const id = e.currentTarget.id

		this.setState({movies: this.state.movies.filter((movie, i) => i != id)})
		
	}
	render () {
		return (
			<div>
				<span> Hi {this.props.username}</span>
				<Movie movies={this.state.movies} removeMovie={this.removeMovie}/>
				<CreateMovie addMovie={this.addMovie}/>
			</div>
			)
	}
}


export default MovieContainer;
