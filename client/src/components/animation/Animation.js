import '../../styles/Animation.css';
import gif from '../../assets/JS.gif';
function Animation({ animationId, float, color }) {
	var dict = {
		gif: './assets/gif.gif',
		js: '../../assets/JS.gif',

		//insert all aimation paths here
	};
	var content = dict[animationId];

	return (
		<div className='animation-box'>
			<div className={float + ' ' + color}>
				{' '}
				<img src={gif} width='100%'></img>
			</div>
		</div>
	);
}

export default Animation;
