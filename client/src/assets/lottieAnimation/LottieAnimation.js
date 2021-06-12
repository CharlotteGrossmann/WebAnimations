//import 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
import Lottie from 'react-lottie';
import animationData from './lottie_ae.json';
function LottieAnimation() {
	const defaultOptions = {
		loop: true,
		width: '300px',
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div>
			<Lottie options={defaultOptions} height={300} width={300} />
		</div>
	);
}

export default LottieAnimation;
