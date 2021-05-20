import TextBox from '../textBox/TextBox';
import Animation from '../animation/Animation';
import '../../styles/Timeline.css';
import Background from '../background/Background';

function Timeline() {
	return (
		<div className='timeline'>
			<Background />

			<TextBox title='Fun Fact' textId='gifFactFact' float='left' />

			<TextBox title='Hard Fact' textId='gifHardFact' float='right' />
			<TextBox title='Fun Fact' textId='gifFactFact' float='left' />
			<Animation animationId='gif' float='left' />

			<TextBox title='Hard Fact' textId='gifHardFact' float='right' />
			<TextBox title='Fun Fact' textId='gifFactFact' float='left' />
			<TextBox title='Hard Fact' textId='gifHardFact' float='right' />
			<TextBox title='Fun Fact' textId='gifFactFact' float='left' />
			<TextBox title='Hard Fact' textId='gifHardFact' float='right' />
		</div>
	);
}

export default Timeline;
