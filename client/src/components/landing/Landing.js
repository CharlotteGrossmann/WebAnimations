//Landing section
import Title from '../title/Title';
import Logo from '../logo/Logo';
import Intro from '../intro/Intro';
import '../../styles/Landing.css';

function Landing() {
	return (
		<div>
			<Title class='title' />
			<Logo class='logo' />
			<Intro class='intro' />
		</div>
	);
}

export default Landing;
