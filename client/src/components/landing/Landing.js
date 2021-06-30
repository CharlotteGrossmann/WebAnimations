//Landing section
//import asset and css
import startingAnimation from '../../assets/web_animations.gif';
import '../../styles/Landing.css';

function Landing() {
	return (
		<div className='landing-div'>
			<h1 className='landing-title'>
				<span className='landing-title-small'>The History of </span> <br />
				<span className='landing-title-big'>Web Animation</span>
			</h1>
			<div className='landing-logo'>
				<img src={startingAnimation} alt='spiderweb' width='100%'></img>
			</div>
			<p className='landing-intro'>
				Eine interaktive Reise durch die Geschichte der Animationstechnologien
				im Web. Von Hannah, Josepha & Lotte.
			</p>
		</div>
	);
}

export default Landing;
