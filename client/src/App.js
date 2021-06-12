import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './components/landing/Landing';
import Timeline from './components/timeline/Timeline';
import JSAnimation from './components/animation/Animation';
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

		return (
			<div className='App'>
				{/* <JSAnimation color='turquoise' animationId='svg' />
				 */}
				<Landing />
				<Timeline />
			</div>
		);
	}
}

export default App;
