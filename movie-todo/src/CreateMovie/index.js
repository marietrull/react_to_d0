import React from 'react';

const CreateMovie = (props) => {

	return (
		<form>
			<label> 
				Movie:
				<input type="text" name="movie"/>
			</label>
			<input type="Submit" value="Submit"/>
		</form>


		)
}

export default CreateMovie;