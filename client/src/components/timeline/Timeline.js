//time line (includes all boxes)
//import react useRef functionality
import React, { useRef } from 'react';

//import css and backgroundassets
import '../../styles/Background.css';
import '../../styles/Timeline.css';
import background from '../../assets/rainbow.svg';
import backgroundMobile from '../../assets/rainbow_mobile.svg';

//import all three box components
import SimpleTextBox from '../simpleTextBox/SimpleTextBox';
import AnimationBox from '../animationBox/AnimationBox';
import TableTextBox from './../tableTextBox/TableTextBox';

function Timeline() {
	//create reference for certain animations
	var CSSAnimationLineRef = useRef();
	var SVGAnimationLineRef = useRef();
	var canvasAnimationTimeLineRef = useRef();
	var lottieAnimationLineRef = useRef();

	//get windowWidth
	let windowWidth = window.innerWidth;

	//get new windowWidth after resizing
	window.addEventListener('resize', () => {
		windowWidth = window.innerWidth;
	});
	return (
		<div className='time-line'>
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
			{/* all components that are on the left side */}
			<div className='time-line-left-column'>
				{/* gif */}
				<section className='time-line-text '>
					<AnimationBox animationId='gif' color='blue' />
				</section>

				{/* css */}
				<section className='time-line-text'>
					<SimpleTextBox title='CSS' textId='cssText' color='yellow' />
					<TableTextBox color='yellow' tableId='css' />
				</section>

				{/* java script */}
				<section className='time-line-text '>
					<AnimationBox animationId='js' color='red' />
				</section>

				{/* flash */}
				<section className='time-line-text'>
					<SimpleTextBox title='Flash' textId='flashText' color='cyan' />
					<TableTextBox color='cyan' tableId='flash' />
					<SimpleTextBox title='Fun Fact' textId='flashFunFact' color='cyan' />
				</section>

				{/* svg */}
				<section className='time-line-text'>
					<span ref={SVGAnimationLineRef}>
						<AnimationBox animationId='svg' color='lime' />
					</span>
				</section>

				{/* canvas */}
				<section className='time-line-text'>
					<SimpleTextBox title='Canvas' textId='canvasText' color='purple' />
					<TableTextBox color='purple' tableId='canvas' />
				</section>

				{/* video */}
				<section className='time-line-text'>
					<AnimationBox animationId='video' color='orange' />
				</section>

				{/* webgl */}
				<section className='time-line-text'>
					<SimpleTextBox title='WebGL' textId='webglText' color='navy' />
					<TableTextBox color='navy' tableId='webGL' />
				</section>

				{/* lottie */}
				<section className='time-line-text'>
					<span ref={lottieAnimationLineRef}>
						<AnimationBox animationId='lottie' color='turquoise' />
					</span>
				</section>
			</div>

			{/* ---------------------------------------------------------- */}
			{/* all components that are on the right side */}
			<div className='time-line-right-column'>
				{/* gif */}
				<section className='time-line-text'>
					<SimpleTextBox title='GIF' textId='gifText' color='blue' />

					<TableTextBox color='blue' tableId='gif' />
					<SimpleTextBox title='Fun Fact' textId='gifFunFact' color='blue' />
				</section>

				{/* css */}
				<section className='time-line-text'>
					<span ref={CSSAnimationLineRef}>
						<AnimationBox animationId='css' color='yellow' />
					</span>
				</section>

				{/* java script */}
				<section className='time-line-text'>
					<SimpleTextBox title='JavaScript' textId='jsText' color='red' />
					<TableTextBox color='red' tableId='javaScript' />
					<SimpleTextBox title='Fun Fact' textId='jsFunFact' color='red' />
				</section>

				{/* flash */}
				<section className='time-line-text'>
					<AnimationBox animationId='flash' color='cyan' />
				</section>

				{/* svg */}
				<section className='time-line-text'>
					<SimpleTextBox title='SVG' textId='svgText' color='lime' />
					<TableTextBox color='lime' tableId='svg' />
					<SimpleTextBox title='Fun Fact' textId='svgFunFact' color='lime' />
				</section>

				{/* canvas */}
				<section className='time-line-text'>
					<span ref={canvasAnimationTimeLineRef}>
						<AnimationBox animationId='canvas' color='purple' />
					</span>
				</section>

				{/* video */}
				<section className='time-line-text'>
					<SimpleTextBox
						title='HTML5 Video'
						textId='videoText'
						color='orange'
					/>
					<TableTextBox color='orange' tableId='video' />
				</section>

				{/* webgl */}
				<section className='time-line-text'>
					<AnimationBox animationId='webgl' color='navy' />
				</section>

				{/* lottie */}
				<section className='time-line-text'>
					<SimpleTextBox title='Lottie' textId='lottieText' color='turquoise' />
					<TableTextBox color='turquoise' tableId='lottie' />
					<SimpleTextBox
						title='Fun Fact'
						textId='lottieFunFact'
						color='turquoise'
					/>
				</section>
			</div>
		</div>
	);
}

export default Timeline;
