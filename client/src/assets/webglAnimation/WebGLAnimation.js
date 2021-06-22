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
	});
	return (
		<div id='WebGlAnimation-box' ref={WebGLAnimationBoxRef}>
			<Unity
				unityContext={unityContext}
				style={{
					height: 300 + 'px',
					width: 300 + 'px',
					position: 'relative',
				}}
			/>
			<p
				id='WebGL-instruction'
				ref={WebGLAnimationInstructionRef}
				style={{
					zIndex: 100,
					position: 'relative',
					color: 'blue',
					fontSize: 40 + 'px',
					fontFamily: 'Arvo',
					top: -250 + 'px',
					left: 50 + 'px',
				}}
			>
				Hover me
			</p>
		</div>
	);
}

export default WebGLAnimation;
