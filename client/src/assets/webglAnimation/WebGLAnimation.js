import Unity, { UnityContext } from 'react-unity-webgl';

/* function WebGLAnimation() {
	
return (
		<div class='webgl-content'>
			<div id='unityContainer' style='width: 300px; height: 300px'></div>
		</div>
	);
}
 */

const unityContext = new UnityContext({
	loaderUrl: './build/Build.loader.js',
	dataUrl: './build/Build.data',
	frameworkUrl: './build/Build.framework.js',
	codeUrl: './build/Build.wasm',
});

function WebGLAnimation() {
	return (
		<div>
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
