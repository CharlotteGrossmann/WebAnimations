//js animation
//import css and react functionality
import './JSAnimation.css';
import React, { useRef, useEffect } from 'react';

function JSAnimation() {
	var mouseX;
	var mouseY;

	//create references
	var JSAnimationShipRef = useRef();
	var JSAnimationInstructionRef = useRef();
	var JSAnimationLineRef = useRef();

	//if component renders
	useEffect(() => {
		// if mouse hovers over animation box, change css and add move-line to className
		JSAnimationShipRef.current.parentElement.addEventListener(
			'mouseover',
			(event) => {
				JSAnimationShipRef.current.style.color = 'red';
				JSAnimationInstructionRef.current.style.visibility = 'hidden';
				JSAnimationLineRef.current.classList.add('move-line');
			}
		);

		//if mouse leaves animation box set css and className to default values
		JSAnimationShipRef.current.parentElement.addEventListener(
			'mouseleave',
			(event) => {
				JSAnimationShipRef.current.style.color = 'grey';

				JSAnimationInstructionRef.current.style.visibility = 'visible';
				JSAnimationShipRef.current.classList.add('default-position');
			}
		);

		//if user clicks inside animation box calculate new position for JS Text to where the mouse is
		JSAnimationShipRef.current.parentElement.addEventListener(
			'click',
			(event) => {
				JSAnimationShipRef.current.classList.remove('default-position');

				mouseX =
					event.x - JSAnimationShipRef.current.parentElement.offsetLeft - 50;
				mouseY =
					event.y -
					JSAnimationShipRef.current.parentElement.getBoundingClientRect().top -
					50;

				JSAnimationShipRef.current.style.transform =
					'translate(' + mouseX + 'px, ' + mouseY + 'px)';
			}
		);
	});

	return (
		<div
			className='JSAnimation'
			id='js-animation-ship'
			ref={JSAnimationShipRef}
			style={{ color: 'grey' }}
		>
			<span
				className='js-animation-instruction'
				ref={JSAnimationInstructionRef}
				style={{ color: 'red' }}
			>
				Click in this Box
			</span>
			<span className='js-animation-title'>JS</span>
			<span className='js-animation-line' ref={JSAnimationLineRef}>
				____________
			</span>
		</div>
	);
}

export default JSAnimation;
