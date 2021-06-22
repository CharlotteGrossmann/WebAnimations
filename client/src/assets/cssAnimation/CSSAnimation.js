import './CSSAnimation.css';

import React, { useEffect, useRef } from 'react';

function CSSAnimation(isActive) {
	const CSSAnimationRef = useRef();
	const CSSAnimationTitleRef = useRef();
	const CSSAnimationLineRef = useRef();
	/* window.addEventListener('scroll', () => {
		console.log(isActive);
	}); */
	return (
		<div className='CSSAnimation' ref={CSSAnimationRef}>
			<span className='css-animation-title' ref={CSSAnimationTitleRef}>
				CSS
			</span>
			<span className='css-animation-line' ref={CSSAnimationLineRef}>
				_______________
			</span>
		</div>
	);
}

export default CSSAnimation;
