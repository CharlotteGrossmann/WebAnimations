import '../../styles/Box.css';

import gifAnimation from '../../assets/gif.gif';
import JSAnimation from '../../assets/jsAnimation/JSAnimation';
import flashAnimation from '../../assets/flash.gif';
import CSSAnimation from '../../assets/cssAnimation/CSSAnimation';
import SVGAnimation from '../../assets/svgAnimation/SVGAnimation';
import CanvasAnimation from '../../assets/canvasAnimation/CanvasAnimation';
import videoAnimation from '../../assets/html5_video.mp4';
import WebGLAnimation from '../../assets/webglAnimation/WebGLAnimation';
import LottieAnimation from '../../assets/lottieAnimation/LottieAnimation';
import React, { useEffect, useRef } from 'react';
function Animation({
	animationId,
	color,
	cssIsActive,
	svgIsActive,
	lottieIsActive,
	canvasIsActive,
}) {
	var dict = {
		gif: (
			<img
				src={gifAnimation}
				alt='animated sketch with flipbook look'
				width='100%'
			></img>
		),
		js: <JSAnimation />,
		flash: (
			<img
				src={flashAnimation}
				alt='lightling that results in flash logo'
				width='100%'
			></img>
		),
		css: <CSSAnimation isActive={cssIsActive} />,
		svg: <SVGAnimation isActive={svgIsActive} />,
		canvas: <CanvasAnimation isActive={canvasIsActive} />,
		video: (
			<video width='300' height='300' autoplay controls loop>
				<source src={videoAnimation} type='video/mp4' />
			</video>
		),
		webgl: <WebGLAnimation />,
		lottie: <LottieAnimation isActive={lottieIsActive} />,

		//insert all aimation paths here
	};
	var content = dict[animationId];
	if (cssIsActive == true) {
		console.log(cssIsActive);
	}
	if (svgIsActive == true) {
		console.log(svgIsActive);
	}

	return (
		<div className=''>
			<div className={'box ' + 'box-' + color + ' animation-box'}>
				{content}
			</div>
		</div>
	);
}

export default Animation;
