import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import Landing from './components/landing/Landing';
import Timeline from './components/timeline/Timeline';
//import JSAnimation from './components/animation/Animation';
class App extends Component {
	render() {
		//this is where our front end is

		return (
			<div className='App'>
				{/* 				<JSAnimation color='turquoise' animationId='lottie' />
				 */}
				<Landing />
				<Timeline />
			</div>
		);
	}
}

export default App;
