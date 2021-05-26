//Landing section
import Logo from '../logo/Logo';
import '../../styles/Landing.css';

function Landing() {
	return (
		<div>
			<h1 class='title'>
				<span class='title-small'>The History of </span> <br />
				<span class='title-big'>Web Animation</span>
			</h1>
			<Logo class='logo' />
			<p class='intro'>
				An interactive journey about the techniques used in Animation across the
				web. Brought to you by Josefa, Lotte & Hannah
			</p>
		</div>
	);
}

export default Landing;
