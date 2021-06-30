//lottie animation
//import react and lottie functionalities
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function LottieAnimation() {
	//create references for the lottie container, div and instruction text
	const container = useRef(null);
	const lottieBoxRef = useRef();
	const lottieAnimationInstructionRef = useRef();

	useEffect(() => {
		//save lottie animation as myElement
		var myElement = lottieBoxRef.current;

		//play animation on hover and hide intstruction text
		myElement.addEventListener('mouseover', () => {
			lottie.play();
			lottieAnimationInstructionRef.current.style.visibility = 'hidden';
		});

		//pause animation if mouse leaves animation box and display istruction text
		myElement.addEventListener('mouseleave', () => {
			lottieAnimationInstructionRef.current.style.visibility = 'visible';
			lottie.pause();
		});
	});

	useEffect(() => {
		//on every component rendered load lottie animation with following settings
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			width: '300px',
			height: '300px',
			loop: true,
			autoplay: false,
			animationData: require('./lottie.json'),
		});

		//don't load lottie if component doesn't render
		return () => {
			lottie.destroy();
		};
	}, []);

	return (
		<div id='lottieAnimation-box' ref={lottieBoxRef}>
			{/* lottie animation is in here  */}
			<div ref={container} />

			{/* istruction text */}
			<p
				id='lottie-instruction'
				ref={lottieAnimationInstructionRef}
				style={{
					zIndex: 100,
					position: 'relative',
					color: 'grey',
					fontSize: 40 + 'px',
					fontFamily: 'Arvo',
					top: -100 + 'px',
					left: 50 + 'px',
				}}
			>
				Hover me
			</p>
		</div>
	);
}

export default LottieAnimation;
