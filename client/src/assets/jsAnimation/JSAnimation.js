import './JSAnimation.css';

function JSAnimation() {
	var mouseX = '';
	var mouseY = '';

	var jsAnimationShip = document.getElementsByClassName('JSAnimation');
	document.body.addEventListener('mousemove', (event) => {
		mouseX = event.x;
		mouseY = event.y;
	});
	function move() {
		jsAnimationShip.style.transform = 'translate(0%, 0%)';
	}
	return (
		<div className='JSAnimation' id='js-animation-ship'>
			<span className='js-animation-title'>JS</span>
			<span className='js-animation-line'>____________</span>
			{/* {move()} */}
		</div>
	);
}

export default JSAnimation;
