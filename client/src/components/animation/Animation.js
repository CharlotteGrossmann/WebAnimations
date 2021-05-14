import '../../styles/Animation.css';

function Animation({ animationId, float }) {
	var dict = {
		gif: './assets/gif.gif',

		//insert all aimation paths here
	};
	var content = dict[animationId];

	return (
		<div className='animation-box'>
			<div className={float}>{content}</div>
		</div>
	);
}

export default Animation;
