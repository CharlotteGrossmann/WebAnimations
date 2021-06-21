import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
	loaderUrl: './build/Build.loader.js',
	dataUrl: './build/Build.data',
	frameworkUrl: './build/Build.framework.js',
	codeUrl: './build/Build.wasm',
});

function WebGLAnimation() {
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
