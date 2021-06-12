import './JSAnimation.css';

function JSAnimation() {
	var mouseX;
	var mouseY;
	var jsAnimationShip;
	jsAnimationShip = document.getElementById('js-animation-ship');

	if (jsAnimationShip) {
		var animationBox = jsAnimationShip.parentElement;

		if (animationBox) {
			animationBox.addEventListener('mouseover', (event) => {
				jsAnimationShip.style.color = 'red';
				document.getElementsByClassName(
					'js-animation-instruction'
				)[0].style.color = 'grey';
				document
					.getElementsByClassName('js-animation-line')[0]
					.classList.add('move-line');
			});

			animationBox.addEventListener('mouseleave', (event) => {
				jsAnimationShip.style.color = 'grey';

				document.getElementsByClassName(
					'js-animation-instruction'
				)[0].style.color = 'red';
				jsAnimationShip.classList.add('default-position');
			});

			animationBox.addEventListener('click', (event) => {
				jsAnimationShip.classList.remove('default-position');

				mouseX = event.x - animationBox.offsetLeft - 50;
				mouseY = event.y - animationBox.getBoundingClientRect().top - 50;

				jsAnimationShip.style.transform =
					'translate(' + mouseX + 'px, ' + mouseY + 'px)';
			});
		}
	}
	return (
		<div
			className='JSAnimation'
			id='js-animation-ship'
			style={{ color: 'grey' }}
		>
			<span className='js-animation-instruction' style={{ color: 'red' }}>
				Click in this Box
			</span>
			<span className='js-animation-title'>JS</span>
			<span className='js-animation-line'>____________</span>
		</div>
	);
}

export default JSAnimation;
