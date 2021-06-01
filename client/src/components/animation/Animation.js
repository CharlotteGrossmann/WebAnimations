import '../../styles/Box.css';
import gifAnim from '../../assets/GIF.gif';
import jsAnim from '../../assets/JS.gif';
import flashAnim from '../../assets/Flash.gif';
import cssAnim from '../../assets/CSS.gif';
import svgAnim from '../../assets/SVG.gif';
import canvasAnim from '../../assets/Canvas.gif';
import videoAnim from '../../assets/Video.gif';
import webglAnim from '../../assets/WebGl.gif';
import lottieAnim from '../../assets/Lottie.gif';
function Animation({ animationId, color }) {
	var dict = {
		gif: gifAnim,
		js: jsAnim,
		flash: flashAnim,
		css: cssAnim,
		svg: svgAnim,
		canvas: canvasAnim,
		video: videoAnim,
		webgl: webglAnim,
		lottie: lottieAnim,

		//insert all aimation paths here
	};
	var content = dict[animationId];

	return (
		<div className='animation-box'>
			<div className={'box ' + color}>
				<img src={content} width='100%'></img>
			</div>
		</div>
	);
}

export default Animation;
