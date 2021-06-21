import '../../styles/Box.css';
import gifAnimation from '../../assets/gif.gif';
import JSAnimation from '../../assets/jsAnimation/JSAnimation';
import flashAnimation from '../../assets/flash.gif';
import CSSAnimation from '../../assets/cssAnimation/CSSAnimation';
import SVGAnimation from '../../assets/svgAnimation/SVGAnimation';
import CanvasAnimation from '../../assets/canvasAnimation/CanvasAnimation';
//import videoAnim from '../../assets/Video.gif';
import WebGLAnimation from '../../assets/webglAnimation/WebGLAnimation';
import LottieAnimation from '../../assets/lottieAnimation/LottieAnimation';

function Animation({ animationId, color, isActive }) {
	var dict = {
		gif: (
			<img
				src={gifAnimation}
				alt='animated sketch with flipbook look'
				width='100%'
			></img>
		),
		js: 'sdgsdfg,', //<JSAnimation />,
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
		video: 'asd',
		webgl: <WebGLAnimation />,
		lottie: <LottieAnimation />,

		//insert all aimation paths here
	};
	var content = dict[animationId];

	return (
		<div className=''>
			<div className={'box ' + 'box-' + color + ' animation-box'}>
				{content}
			</div>
		</div>
	);
}

export default Animation;
