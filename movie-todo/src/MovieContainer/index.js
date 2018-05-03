import React, { Component } from 'react';

class MovieContainer extends Component {
	constructor (){
		super();

		this.state = {
			movies: ['Young Frankenstein', 'Blazing Saddles', 'History of the World Part One', 'The Producers']
		}
	}
	render () {
		return (
			<span> Hi {this.props.username}</span>
			)
	}
}

export default MovieContainer;