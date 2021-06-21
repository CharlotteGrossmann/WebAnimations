import './CSSAnimation.css';

import React from 'react';

function CSSAnimation() {
	const componentRef = React.useRef();
	return (
		<div className='CSSAnimation'>
			<span className='css-animation-title'>CSS</span>
			<span className='css-animation-line'>_______________</span>
		</div>
	);
}

export default CSSAnimation;
