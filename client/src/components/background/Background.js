import '../../styles/Background.css';

import background from '../../assets/rainbow.svg';
import backgroundMobile from '../../assets/rainbow_mobile.svg';

function Background() {
	//get windowWidth
	let windowWidth = window.innerWidth;

	//get new windowWidth after resizing
	window.addEventListener('resize', () => {
		windowWidth = window.innerWidth;
	});
	return (
		<div>
			{/* Background SVG is always as wide as viewport */}
			<img
				className='background-svg'
				alt=''
				src={background}
				style={{ width: { windowWidth }, height: 'auto' }}
			/>
			<img
				className='background-svg-mobile'
				alt=''
				src={backgroundMobile}
				style={{ width: { windowWidth }, height: 'auto' }}
			/>
			<svg
				className='background-svg'
				style={{ width: { windowWidth }, height: 'auto' }}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1007.99 8192'
			>
				<g className='time-line-anchors' style={{ opacity: 0 }}>
					<g className='gif-anchor'>
						<path d='M478.58,1107.57h1.95v-9.73l-2.87,1.71v-4.29l5.15-3,1.78,0v15.31h2V1111h-8v-3.38Z' />{' '}
					</g>
					<g className='css-anchor'>
						<path d='M478.93,1896.46h1.95v-9.73l-2.87,1.71v-4.29l5.15-3,1.78,0v15.31h2v3.37h-8v-3.38Z' />
					</g>
					<g className='js-anchor'>
						<path d='M478.93,2685.35h1.95v-9.73l-2.87,1.71V2673l5.15-3,1.78,0v15.31h2v3.37h-8v-3.38Z' />
					</g>
					<g className='flash-anchor'>
						<path d='M478.76,3474.24h1.95v-9.73l-2.87,1.71v-4.29l5.15-3,1.78,0v15.31h2v3.37h-8v-3.38Z' />
					</g>
					<g className='svg-anchor'>
						<path d='M523.44,4263.13h1.95v-9.73l-2.87,1.71v-4.29l5.15-3,1.78,0v15.31h2v3.37h-8v-3.38Z' />
					</g>
					<g className='canvas-anchor'>
						<path d='M519.58,5047.15l6.63-10.41h4.11l-6.53,10.44h3.93v-3.61l3.85,0v3.66h2.6v3.12h-2.6V5052H534v3.37h-8V5052h1.77v-1.72h-8.15v-3.15Z' />
					</g>
					<g className='video-anchor'>
						<path d='M522.53,5840.91h1.3c.42-1,.85-1.95,1.3-2.95s.88-2,1.32-3l1.29-2.86,1.22-2.67h-5.21v2.11h-3.53v-5.95h13.64v2.77q-1.46,3-3,6.15c-1,2.12-2,4.23-2.91,6.36h1.21v3.37h-6.65v-3.36Z' />
					</g>
					<g className='webgl-anchor'>
						<path d='M520.48,6629.8h1.95v-9.73l-2.87,1.71v-4.28l5.15-3,1.78,0v15.31h2v3.37h-8v-3.38Z' />
					</g>
					<g className='lottie-anchor'>
						<path d='M508.14,7418.69h2V7409l-2.87,1.71v-4.28l5.14-3,1.79,0v15.31h2v3.37h-8v-3.38Z' />
					</g>
				</g>
			</svg>
		</div>
	);
}

export default Background;
