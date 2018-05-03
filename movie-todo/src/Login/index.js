import React, { Component } from 'react';
import './style.css';

class Login extends Component {
		login=(e) => {
			//When the user presses enter
			if(e.key === "Enter"){
				this.props.updateUsername(e.target.value)
			}
		}
		render(){
		return (
			<div>
			<h5> Username </h5>
			<input type='text' onKeyPress={this.login}/>
			</div>
		)
	}
}

export default Login;