import TextBox from '../textBox/TextBox';
import Animation from '../animation/Animation';
import '../../styles/Timeline.css';
import Background from '../background/Background';

function Timeline() {
	return (
		<div className='timeline'>
			<Background />
			<section className='time-line-text'>
				<TextBox
					title='Fun Fact'
					textId='gifFactFact'
					float='left'
					color='blue'
				/>

				<TextBox
					title='Hard Fact'
					textId='gifHardFact'
					float='right'
					color='blue'
				/>
			</section>
			<section className='time-line-text'>
				<TextBox
					title='Fun Fact'
					textId='gifFactFact'
					float='left'
					color='red'
				/>
				<Animation animationId='gif' float='left' color='red' />

				<TextBox
					title='Hard Fact'
					textId='gifHardFact'
					float='right'
					color='red'
				/>
			</section>
			<section className='time-line-text'>
				<TextBox
					title='Fun Fact'
					textId='gifFactFact'
					float='left'
					color='cyan'
				/>
				<TextBox
					title='Hard Fact'
					textId='gifHardFact'
					float='right'
					color='cyan'
				/>
			</section>
			<section className='time-line-text'>
				<TextBox
					title='Fun Fact'
					textId='gifFactFact'
					float='left'
					color='yellow'
				/>

				<TextBox
					title='Hard Fact'
					textId='gifHardFact'
					float='left'
					color='yellow'
				/>
			</section>
		</div>
	);
}

export default Timeline;
