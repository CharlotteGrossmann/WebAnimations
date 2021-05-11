import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header/Header';
import Button from './components/button/Button';
import Footer from './components/footer/Footer';

class App extends Component {
	state = {
		response: {},
	};

	componentDidMount() {
		axios.get('/api/v1/say-something').then((res) => {
			const response = res.data;
			this.setState({ response });
		});
	}

	render() {
		//this is where our front end is
		var x = false; //if x= true, it will write "yes" if not "Very yes"
		var variableText;
		const onClick = () => {
			x = !x;
			alert(x);
		};
		variableText = x ? 'Yes' : 'Very Yes';
		return (
			//can only return one (1) parent element (i.e. div)
			<div className='App'>
				<Header title='This is my header' />
				<h1>This is my Title </h1>
				<h3>{this.state.response.body}</h3> {/*variable vom backend*/}
				<p>
					Variable Content: <span className='variable'>{variableText}</span>
				</p>
				<Button text='change variable' onClick={onClick} />
				<Footer />
			</div>
		);
	}
}

export default App;
