//AnimationBox
//import css
import '../../styles/Box.css';

//import animation components/files
import gifAnimation from '../../assets/gif.gif';
import JSAnimation from '../../assets/jsAnimation/JSAnimation';
import flashAnimation from '../../assets/flash.gif';
import CSSAnimation from '../../assets/cssAnimation/CSSAnimation';
import SVGAnimation from '../../assets/svgAnimation/SVGAnimation';
import CanvasAnimation from '../../assets/canvasAnimation/CanvasAnimation';
import videoAnimation from '../../assets/html5_video.mp4';
import WebGLAnimation from '../../assets/webglAnimation/WebGLAnimation';
import LottieAnimation from '../../assets/lottieAnimation/LottieAnimation';

//dictonary with animationIds an respective animation
function AnimationBox({ animationId, color }) {
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
		css: <CSSAnimation />,
		svg: <SVGAnimation />,
		canvas: <CanvasAnimation />,
		video: (
			<video width='300' height='300' autoplay controls loop>
				<source src={videoAnimation} type='video/mp4' />
			</video>
		),
		webgl: <WebGLAnimation />,
		lottie: <LottieAnimation />,
	};

	//let content be the wanted animation
	let content = dict[animationId];

	return (
		<div className=''>
			<div className={'box ' + 'box-' + color + ' animation-box'}>
				{content}
			</div>
		</div>
	);
}

export default AnimationBox;
