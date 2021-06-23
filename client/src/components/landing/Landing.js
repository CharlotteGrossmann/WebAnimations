//Landing section
import Logo from '../logo/Logo';
import '../../styles/Landing.css';

function Landing() {
	return (
		<div className='landing-div'>
			<h1 className='landing-title'>
				<span className='landing-title-small'>The History of </span> <br />
				<span className='landing-title-big'>Web Animation</span>
			</h1>
			<Logo className='landing-logo' />
			<p className='landing-intro'>
				Eine interaktive Reise durch die Geschichte der Animationstechnologien
				im Web. Von Hannah, Josepha & Lotte.
			</p>
		</div>
	);
}

export default Landing;
