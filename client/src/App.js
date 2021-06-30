import React, { Component } from 'react';
import './App.css';

import Landing from './components/landing/Landing';
import Timeline from './components/timeline/Timeline';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Landing />
				<Timeline />
			</div>
		);
	}
}

export default App;
