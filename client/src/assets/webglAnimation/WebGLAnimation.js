import Unity, { UnityContext } from 'react-unity-webgl';
import React, { useRef, useEffect } from 'react';

const unityContext = new UnityContext({
	loaderUrl: './build/Build.loader.js',
	dataUrl: './build/Build.data',
	frameworkUrl: './build/Build.framework.js',
	codeUrl: './build/Build.wasm',
});

function WebGLAnimation() {
	const WebGLAnimationInstructionRef = useRef();
	const WebGLAnimationBoxRef = useRef();

	useEffect(() => {
		WebGLAnimationBoxRef.current.addEventListener('mouseover', () => {
			WebGLAnimationInstructionRef.current.style.visibility = 'hidden';
		});
		WebGLAnimationBoxRef.current.addEventListener('mouseout', () => {
			WebGLAnimationInstructionRef.current.style.visibility = 'visible';
		});
	});
	return (
		<div id='WebGlAnimation-box' ref={WebGLAnimationBoxRef}>
			<Unity
				unityContext={unityContext}
				style={{
					height: 300 + 'px',
					width: 300 + 'px',
				}}
			/>
			<p
				id='WebGL-instruction'
				ref={WebGLAnimationInstructionRef}
				style={{
					zIndex: 100,
					position: 'relative',
				}}
			>
				Hover me
			</p>
		</div>
	);
}

export default WebGLAnimation;
