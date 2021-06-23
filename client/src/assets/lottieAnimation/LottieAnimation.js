import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function LottieAnimation() {
	const container = useRef(null);
	const lottieBoxRef = useRef();
	const lottieAnimationInstructionRef = useRef();

	useEffect(() => {
		var myElement = lottieBoxRef.current;
		myElement.addEventListener('mouseover', () => {
			lottie.play();

			lottieAnimationInstructionRef.current.style.visibility = 'hidden';
		});
		myElement.addEventListener('mouseleave', () => {
			lottieAnimationInstructionRef.current.style.visibility = 'visible';
			lottie.pause();
		});
	});

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			width: '300px',
			height: '300px',
			loop: true,
			autoplay: false,
			animationData: require('./lottie.json'),
		});

		return () => {
			lottie.destroy();
		};
	}, []);

	return (
		<div id='lottieAnimation-box' ref={lottieBoxRef}>
			<div ref={container} />
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
