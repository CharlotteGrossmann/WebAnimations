import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './components/landing/Landing';
import TextBox from './components/textBox/TextBox';
import Animation from './components/animation/Animation';
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
				<Landing />
				<div className='time-line'>
					<TextBox title='Fun Fact' textId='gifFactFact' float='left' />

					<TextBox title='Hard Fact' textId='gifHardFact' float='right' />
					<TextBox title='Fun Fact' textId='gifFactFact' float='left' />
					<Animation animationId='gif' float='left' />

					<TextBox title='Hard Fact' textId='gifHardFact' float='right' />
					<TextBox title='Fun Fact' textId='gifFactFact' float='left' />
					<TextBox title='Hard Fact' textId='gifHardFact' float='right' />
					<TextBox title='Fun Fact' textId='gifFactFact' float='left' />
					<TextBox title='Hard Fact' textId='gifHardFact' float='right' />
				</div>
			</div>
		);
	}
}

export default App;
