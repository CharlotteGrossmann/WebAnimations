import SimpleTextBox from '../simpleTextBox/SimpleTextBox';
import AnimationBox from '../animationBox/AnimationBox';
import '../../styles/Timeline.css';
import TableTextBox from './../tableTextBox/TableTextBox';
import React, { useRef } from 'react';
import '../../styles/Background.css';
//import Background from '../background/Background';
import background from '../../assets/rainbow.svg';
import backgroundMobile from '../../assets/rainbow_mobile.svg';
function Timeline() {
	var cssIsActive = false;
	var CSSAnimationLineRef = useRef();

	var svgIsActive = false;
	var SVGAnimationLineRef = useRef();

	var canvasIsActive = false;
	var canvasAnimationTimeLineRef = useRef();

	var lottieIsActive = false;
	var lottieAnimationLineRef = useRef();

	let windowWidth = window.innerWidth;

	window.addEventListener('resize', () => {
		windowWidth = window.innerWidth;
	});
	return (
		<div className='time-line'>
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
			<div className='time-line-left-column'>
				<section className='time-line-text '>
					<AnimationBox animationId='gif' float='left' color='blue' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='CSS'
						textId='cssText'
						float='left'
						color='yellow'
					/>
					<TableTextBox float='left' color='yellow' tableId='css' />
				</section>

				<section className='time-line-text '>
					<AnimationBox animationId='js' float='right' color='red' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='Flash'
						textId='flashText'
						float='right'
						color='cyan'
					/>
					<TableTextBox float='right' color='cyan' tableId='flash' />
					<SimpleTextBox
						title='Fun Fact'
						textId='flashFunFact'
						float='right'
						color='cyan'
					/>
				</section>
				<section className='time-line-text'>
					<span ref={SVGAnimationLineRef}>
						<AnimationBox
							animationId='svg'
							float='left'
							color='lime'
							svgIsActive={svgIsActive}
						/>
					</span>
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='Canvas'
						textId='canvasText'
						float='left'
						color='purple'
					/>
					<TableTextBox float='left' color='purple' tableId='canvas' />
				</section>
				<section className='time-line-text'>
					<AnimationBox animationId='video' float='left' color='orange' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='WebGL'
						textId='webglText'
						float='left'
						color='navy'
					/>
					<TableTextBox float='left' color='navy' tableId='webGL' />
				</section>
				<section className='time-line-text'>
					<span ref={lottieAnimationLineRef}>
						<AnimationBox
							animationId='lottie'
							float='left'
							color='turquoise'
							lottieIsActive={lottieIsActive}
						/>
					</span>
				</section>
			</div>
			{/* ---------------------------------------------------------- */}
			<div className='time-line-right-column'>
				<section className='time-line-text'>
					<SimpleTextBox
						title='GIF'
						textId='gifText'
						float='right'
						color='blue'
					/>

					<TableTextBox float='right' color='blue' tableId='gif' />
					<SimpleTextBox
						title='Fun Fact'
						textId='gifFunFact'
						float='right'
						color='blue'
					/>
				</section>
				<section className='time-line-text'>
					<span ref={CSSAnimationLineRef}>
						<AnimationBox
							animationId='css'
							float='right'
							color='yellow'
							cssIsActive={cssIsActive}
						/>
					</span>
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='JavaScript'
						textId='jsText'
						float='left'
						color='red'
					/>
					<TableTextBox float='left' color='red' tableId='javaScript' />
					<SimpleTextBox
						title='Fun Fact'
						textId='jsFunFact'
						float='left'
						color='red'
					/>
				</section>
				<section className='time-line-text'>
					<AnimationBox animationId='flash' float='left' color='cyan' />
				</section>

				<section className='time-line-text'>
					<SimpleTextBox
						title='SVG'
						textId='svgText'
						float='right'
						color='lime'
					/>
					<TableTextBox float='right' color='lime' tableId='svg' />
					<SimpleTextBox
						title='Fun Fact'
						textId='svgFunFact'
						float='right'
						color='lime'
					/>
				</section>
				<section className='time-line-text'>
					<span ref={canvasAnimationTimeLineRef}>
						<AnimationBox
							animationId='canvas'
							float='right'
							color='purple'
							canvasIsActive={canvasIsActive}
						/>
					</span>
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='HTML5 Video'
						textId='videoText'
						float='right'
						color='orange'
					/>
					<TableTextBox float='right' color='orange' tableId='video' />
				</section>
				<section className='time-line-text'>
					<AnimationBox animationId='webgl' float='right' color='navy' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='Lottie'
						textId='lottieText'
						float='right'
						color='turquoise'
					/>
					<TableTextBox float='right' color='turquoise' tableId='lottie' />
					<SimpleTextBox
						title='Fun Fact'
						textId='lottieFunFact'
						float='right'
						color='turquoise'
					/>
				</section>
			</div>
		</div>
	);
}

export default Timeline;
