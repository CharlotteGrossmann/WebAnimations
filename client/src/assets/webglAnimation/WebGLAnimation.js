import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
	loaderUrl: './build/Build.loader.js',
	dataUrl: './build/Build.data',
	frameworkUrl: './build/Build.framework.js',
	codeUrl: './build/Build.wasm',
});

function WebGLAnimation() {
	var debugWebGLAnimation = false;

	var myElement = document.getElementById('WebGlAnimation-box');
	document.addEventListener('scroll', () => {
		if (myElement) {
			var bounding = myElement.getBoundingClientRect();

			console.log(bounding);

			//if webgl is in viewport -> start animation
			if (
				bounding.top >= 0 &&
				bounding.left >= 0 &&
				bounding.right <=
					(window.innerWidth || document.documentElement.clientWidth) &&
				bounding.bottom <=
					(window.innerHeight || document.documentElement.clientHeight)
			) {
				if (unityContext) {
					unityContext.send('DoorAngle', 'TogglePlay', 1);
				}
				if (debugWebGLAnimation) {
					console.log('Element is in the viewport!');
				}
			} else {
				if (debugWebGLAnimation) {
					console.log('Element is not in the viewport!');
				}
			}
		}
	});
	return (
		<div id='WebGlAnimation-box'>
			<Unity
				unityContext={unityContext}
				style={{
					height: 300 + 'px',
					width: 300 + 'px',
				}}
			/>
		</div>
	);
}

export default WebGLAnimation;
