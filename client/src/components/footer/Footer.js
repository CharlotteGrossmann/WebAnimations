import Random from '../../assets/random.jpg';
import Button from '../button/Button';
import '../../styles/Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<h1>This is my footer</h1>
			<img src={Random} />
			<Button text='click me' onClick={onClick} />
		</div>
	);
}

function onClick() {
	alert('footer button clicked');
}

export default Footer;
