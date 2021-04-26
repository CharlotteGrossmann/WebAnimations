import Button from '../button/Button';
import '../../styles/Footer.css';
import Random from '../../assets/random.jpg';
function Footer() {
	return (
		<div className='footer'>
			<h1>This is my footer</h1>
			<img src={Random} />
			<Button text='social media' />
		</div>
	);
}

export default Footer;
