import React, { Component} from 'react';

//'wrote addMovie function and passed it down to CreateMovie as a prop - added onSubmit to form in CreateMovie - wrote updateMovie to collect user information onChange'

class CreateMovie extends Component {
	constructor (){
		super();
		this.state = {
			movie: ''
		}
	}
	updateMovie = (e) => {
		const movie = e.currentTarget.value;
		this.setState({movie: movie})
	}

	render (){
		console.log(this.state, ' state inCreateMovie')
	return (
		<form onSubmit={this.props.addMovie.bind(null, this.state.movie)}>
			<label> 
				Movie:
				<input type="text" name="movie" onChange={this.updateMovie}/>
			</label>
			<input type="Submit"/>
		</form>
		)
	}
}

export default CreateMovie;