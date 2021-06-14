import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function LottieAnimation() {
	var debugLottieAnimation = false;
	const container = useRef(null);

	var myElement = document.getElementById('lottieAnimation-box');
	document.addEventListener('scroll', () => {
		if (myElement) {
			var bounding = myElement.getBoundingClientRect();
			if (debugLottieAnimation) {
				console.log(bounding);
			}
			//if lottie is in viewport -> start animation
			if (
				bounding.top >= 0 &&
				bounding.left >= 0 &&
				bounding.right <=
					(window.innerWidth || document.documentElement.clientWidth) &&
				bounding.bottom <=
					(window.innerHeight || document.documentElement.clientHeight)
			) {
				lottie.play();
				if (debugLottieAnimation) {
					console.log('Element is in the viewport!');
				}
			} else {
				lottie.pause();

				if (debugLottieAnimation) {
					console.log('Element is not in the viewport!');
				}
			}
		}
	});
	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			width: '300px',
			height: '300px',
			loop: true,
			autoplay: false,
			animationData: require('./lottie_ae.json'),
		});

		return () => {
			lottie.destroy();
		};
	}, []);

	return (
		<div id='lottieAnimation-box'>
			<div ref={container} />
		</div>
	);
}

export default LottieAnimation;
