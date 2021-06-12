import '../../styles/Box.css';
//import gifAnim from '../../assets/GIF.gif';
import JSAnimation from '../../assets/jsAnimation/JSAnimation';
//import flashAnim from '../../assets/Flash.gif';
import CSSAnimation from '../../assets/cssAnimation/CSSAnimation';
import SVGAnimation from '../../assets/svgAnimation/SVGAnimation';
//import canvasAnim from '../../assets/Canvas.gif';
//import videoAnim from '../../assets/Video.gif';
import WebGLAnimation from '../../assets/webglAnimation/WebGLAnimation';
import LottieAnimation from '../../assets/lottieAnimation/LottieAnimation';
function Animation({ animationId, color }) {
	var dict = {
		gif: 'asd',
		js: <JSAnimation />,
		flash: 'asd',
		css: <CSSAnimation />,
		svg: <SVGAnimation />,
		canvas: 'asd',
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
				{/* <img src={content} width='100%'></img> */}
			</div>
		</div>
	);
}

export default Animation;
