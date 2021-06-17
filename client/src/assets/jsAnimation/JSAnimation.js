import './JSAnimation.css';

function JSAnimation() {
	var mouseX;
	var mouseY;

	document
		.getElementById('js-animation-ship')
		.parentElement.addEventListener('mouseover', (event) => {
			document.getElementById('js-animation-ship').style.color = 'red';
			document.getElementsByClassName(
				'js-animation-instruction'
			)[0].style.color = 'grey';
			document
				.getElementsByClassName('js-animation-line')[0]
				.classList.add('move-line');
		});

	document
		.getElementById('js-animation-ship')
		.parentElement.addEventListener('mouseleave', (event) => {
			document.getElementById('js-animation-ship').style.color = 'grey';

			document.getElementsByClassName(
				'js-animation-instruction'
			)[0].style.color = 'red';
			document
				.getElementById('js-animation-ship')
				.classList.add('default-position');
		});

	document
		.getElementById('js-animation-ship')
		.parentElement.addEventListener('click', (event) => {
			document
				.getElementById('js-animation-ship')
				.classList.remove('default-position');

			mouseX =
				event.x -
				document.getElementById('js-animation-ship').parentElement.offsetLeft -
				50;
			mouseY =
				event.y -
				document
					.getElementById('js-animation-ship')
					.parentElement.getBoundingClientRect().top -
				50;

			document.getElementById('js-animation-ship').style.transform =
				'translate(' + mouseX + 'px, ' + mouseY + 'px)';
		});

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
