import '../../styles/Box.css';
import gifAnim from '../../assets/GIF.gif';
import JSAnimation from '../../assets/jsAnimation/JSAnimation';
import flashAnim from '../../assets/Flash.gif';
import CSSAnimation from '../../assets/cssAnimation/CSSAnimation';
import svgAnim from '../../assets/SVG.gif';
import canvasAnim from '../../assets/Canvas.gif';
import videoAnim from '../../assets/Video.gif';
import webglAnim from '../../assets/WebGL.gif';
import lottieAnim from '../../assets/Lottie.gif';
function Animation({ animationId, color }) {
	var dict = {
		gif: gifAnim,
		js: <JSAnimation />,
		flash: flashAnim,
		css: <CSSAnimation />,
		svg: svgAnim,
		canvas: canvasAnim,
		video: videoAnim,
		webgl: webglAnim,
		lottie: lottieAnim,

		//insert all aimation paths here
	};
	var content = dict[animationId];

	return (
		<div className=''>
			<div className={'box ' + color + ' animation-box'}>
				{content}
				{/* <img src={content} width='100%'></img> */}
			</div>
		</div>
	);
}

export default Animation;
