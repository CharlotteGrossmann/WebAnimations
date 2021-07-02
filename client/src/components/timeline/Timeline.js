//time line (includes all boxes)

//import css
import '../../styles/Timeline.css';

//import all three box components
import SimpleTextBox from '../simpleTextBox/SimpleTextBox';
import AnimationBox from '../animationBox/AnimationBox';
import TableTextBox from './../tableTextBox/TableTextBox';

function Timeline() {
	return (
		<div className='time-line'>
			{/* all components that are on the left side */}
			<div className='time-line-grid'>
				{/* gif */}
				<section className='time-line-text section1'>
					<AnimationBox animationId='gif' color='blue' />
				</section>

				{/* css */}
				<section className='time-line-text section3'>
					<SimpleTextBox title='CSS' textId='cssText' color='yellow' />
					<TableTextBox color='yellow' tableId='css' />
				</section>

				{/* java script */}
				<section className='time-line-text section5'>
					<AnimationBox animationId='js' color='red' />
				</section>

				{/* flash */}
				<section className='time-line-text section7'>
					<SimpleTextBox title='Flash' textId='flashText' color='cyan' />
					<TableTextBox color='cyan' tableId='flash' />
					<SimpleTextBox title='Fun Fact' textId='flashFunFact' color='cyan' />
				</section>

				{/* svg */}
				<section className='time-line-text section9'>
					<AnimationBox animationId='svg' color='lime' />
				</section>

				{/* canvas */}
				<section className='time-line-text section11'>
					<SimpleTextBox title='Canvas' textId='canvasText' color='purple' />
					<TableTextBox color='purple' tableId='canvas' />
				</section>

				{/* video */}
				<section className='time-line-text section13'>
					<AnimationBox animationId='video' color='orange' />
				</section>

				{/* webgl */}
				<section className='time-line-text section15'>
					<SimpleTextBox title='WebGL' textId='webglText' color='navy' />
					<TableTextBox color='navy' tableId='webGL' />
				</section>

				{/* lottie */}
				<section className='time-line-text section17'>
					<AnimationBox animationId='lottie' color='turquoise' />
				</section>
				{/* </div> */}

				{/* ---------------------------------------------------------- */}
				{/* all components that are on the right side */}
				{/* gif */}
				<section className='time-line-text  section2'>
					<SimpleTextBox title='GIF' textId='gifText' color='blue' />

					<TableTextBox color='blue' tableId='gif' />
					<SimpleTextBox title='Fun Fact' textId='gifFunFact' color='blue' />
				</section>

				{/* css */}
				<section className='time-line-text section4'>
					<AnimationBox animationId='css' color='yellow' />
				</section>

				{/* java script */}
				<section className='time-line-text section6'>
					<SimpleTextBox title='JavaScript' textId='jsText' color='red' />
					<TableTextBox color='red' tableId='javaScript' />
					<SimpleTextBox title='Fun Fact' textId='jsFunFact' color='red' />
				</section>

				{/* flash */}
				<section className='time-line-text section8'>
					<AnimationBox animationId='flash' color='cyan' />
				</section>

				{/* svg */}
				<section className='time-line-text section10'>
					<SimpleTextBox title='SVG' textId='svgText' color='lime' />
					<TableTextBox color='lime' tableId='svg' />
					<SimpleTextBox title='Fun Fact' textId='svgFunFact' color='lime' />
				</section>

				{/* canvas */}
				<section className='time-line-text section12'>
					<AnimationBox animationId='canvas' color='purple' />
				</section>

				{/* video */}
				<section className='time-line-text section14'>
					<SimpleTextBox
						title='HTML5 Video'
						textId='videoText'
						color='orange'
					/>
					<TableTextBox color='orange' tableId='video' />
				</section>

				{/* webgl */}
				<section className='time-line-text section16'>
					<AnimationBox animationId='webgl' color='navy' />
				</section>

				{/* lottie */}
				<section className='time-line-text section18'>
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
