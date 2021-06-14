import './SVGAnimation.css';
function SVGAnimation() {
	var debugSVGAnimation = false;
	var myElement = document.getElementById('svgAnimation-box');
	document.addEventListener('scroll', () => {
		if (myElement) {
			var bounding = myElement.getBoundingClientRect();
			if (debugSVGAnimation) {
				console.log(bounding);
			}
			//if svg is in viewport -> start animation
			if (
				bounding.top >= 0 &&
				bounding.left >= 0 &&
				bounding.right <=
					(window.innerWidth || document.documentElement.clientWidth) &&
				bounding.bottom <=
					(window.innerHeight || document.documentElement.clientHeight)
			) {
				document
					.getElementById('svg-letter-s')
					.classList.add('animate-letter-s');
				document
					.getElementById('svg-letter-v')
					.classList.add('animate-letter-v');
				document.getElementById('svg-ball').classList.add('ball');

				if (debugSVGAnimation) {
					console.log('Element is in the viewport!');
				}
			} else {
				document
					.getElementById('svg-letter-s')
					.classList.remove('animate-letter-s');
				document
					.getElementById('svg-letter-v')
					.classList.remove('animate-letter-v');
				document.getElementById('svg-ball').classList.remove('ball');

				if (debugSVGAnimation) {
					console.log('Element is not in the viewport!');
				}
			}
		}
	});

	return (
		<div id='svgAnimation-box'>
			<svg
				id='svg-animation-svg'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 300 300'
			>
				<g id='svg-word'>
					<path
						id='svg-letter-s'
						class=''
						stroke='#00ff00'
						stroke-width='1'
						d='m29.53 11.33M29.53 11.33a9.22 9.22 0 0 0 -2.53 -2.47a11.62 11.62 0 0 0 -3.08 -1.31a12.61 12.61 0 0 0 -3.37 -0.46a16.5 16.5 0 0 0 -4.86 0.64a10.16 10.16 0 0 0 -3.45 1.74a7.38 7.38 0 0 0 -2.12 2.53a7.13 7.13 0 0 0 -0.69 3.07a7.77 7.77 0 0 0 0.86 3.9a7.19 7.19 0 0 0 2.17 2.37a11.21 11.21 0 0 0 2.91 1.41c1.06 0.34 2.08 0.68 3.05 1l7.38 2.42a34.73 34.73 0 0 1 5.87 2.41a16.18 16.18 0 0 1 4.26 3.2a12.8 12.8 0 0 1 2.61 4.25a16 16 0 0 1 0.9 5.6a14.38 14.38 0 0 1 -1.44 6.37a15.39 15.39 0 0 1 -3.9 5.1a18.72 18.72 0 0 1 -6 3.39a23.17 23.17 0 0 1 -7.66 1.22a24.06 24.06 0 0 1 -7.31 -1a16.08 16.08 0 0 1 -5.13 -2.56a13.78 13.78 0 0 1 -3.31 -3.71a20.65 20.65 0 0 1 -1.93 -4.28h-2.76v-6.29h9.21a13.69 13.69 0 0 0 0.86 5.74a7.78 7.78 0 0 0 2.39 2.8a11.11 11.11 0 0 0 3.66 1.68a18 18 0 0 0 4.68 0.57a15.81 15.81 0 0 0 4.47 -0.59a9.78 9.78 0 0 0 3.4 -1.7a7.43 7.43 0 0 0 2.16 -2.7a8.34 8.34 0 0 0 0.75 -3.6a7.27 7.27 0 0 0 -0.93 -3.79a9.47 9.47 0 0 0 -2.4 -2.65a14.08 14.08 0 0 0 -3.2 -1.79c-1.15 -0.46 -2.27 -0.86 -3.34 -1.2l-8 -2.27a23.51 23.51 0 0 1 -4.81 -2a14.24 14.24 0 0 1 -3.73 -3a12.85 12.85 0 0 1 -2.39 -4.18a16.72 16.72 0 0 1 -0.84 -5.54a14.4 14.4 0 0 1 1.24 -6a14 14 0 0 1 3.65 -4.9a17.55 17.55 0 0 1 5.91 -3.27a24.76 24.76 0 0 1 8 -1.19a20.12 20.12 0 0 1 5.47 0.7a17.13 17.13 0 0 1 4.53 2a15.6 15.6 0 0 1 3.56 3.01a17.9 17.9 0 0 1 2.61 3.89h2.75v6.28h-9a8.18 8.18 0 0 0 -1.13 -4.84z'
					/>
					<path
						id='svg-letter-v'
						class=''
						stroke='#00ff00'
						stroke-width='1'
						d='M78.32,1.1h18V7.42H91.52l-18,49.08h-10L45.83,7.42h-4.9V1.1h18V7.42H54.09L68.31,50.14,83.55,7.42H78.32Z'
					/>
					<path
						id='svg-letter-g'
						fill='none'
						stroke='#00ff00'
						stroke-width='1'
						stroke-linejoin='round'
						d='M143.56,56.72V45.61a18.68,18.68,0,0,1-3.47,5,19.72,19.72,0,0,1-4.64,3.53A22.4,22.4,0,0,1,130,56.25a25.38,25.38,0,0,1-5.9.69,26.84,26.84,0,0,1-10-1.81,22.82,22.82,0,0,1-8.27-5.75A26.59,26.59,0,0,1,100.16,40a33,33,0,0,1-2-11.29,32,32,0,0,1,2-11.19,28.16,28.16,0,0,1,5.48-9.17,25.45,25.45,0,0,1,8.41-6.14A25.09,25.09,0,0,1,124.63,0a24.57,24.57,0,0,1,9.05,1.5,25.62,25.62,0,0,1,6.47,3.63,29.49,29.49,0,0,1,4.29,4.08H148v6.51h-7.85a18.44,18.44,0,0,0-6.49-6.58,18.12,18.12,0,0,0-16.76-.55,18.75,18.75,0,0,0-6,4.82,22.64,22.64,0,0,0-3.89,7,24.87,24.87,0,0,0-1.39,8.34,25.92,25.92,0,0,0,1.53,9A20.46,20.46,0,0,0,111,44.52a19.29,19.29,0,0,0,5.87,4.29,17.46,17.46,0,0,0,7.73,1.7q7,0,11.51-3.42t6.29-10.65h-15.5V30.15h23.43V56.72Z'
					/>
				</g>
			</svg>

			<div id='svg-ball' class=''></div>
		</div>
	);
}

export default SVGAnimation;
