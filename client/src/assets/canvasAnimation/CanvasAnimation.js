//canvas animation based on https://codepen.io/franksLaboratory/pen/eYJyrgw
//import assets, css and react functionality
import './CanvasAnimation.css';
import forms from './forms.png';
import React, { useRef, useEffect } from 'react';

function CanvasAnimation() {
	// create references
	const canvasRef = useRef();
	const canvasBoxRef = useRef();
	const canvasAnimationInstructionRef = useRef();

	//as soon as component is rendered
	useEffect(() => {
		//save the html canvas element in const canvas
		const canvas = canvasRef.current;

		//create a sprite with imported asset
		const sprite = new Image();
		sprite.src = forms;

		//some settings for the display of particles
		let hue = 0;
		let particles = [];
		let numberOfParticles = 100;
		let radius = window.innerWidth / 5;
		let isCanvasPaused = true;

		// handle mouse
		const mouse = {
			x: 0,
			y: 0,
			radius: 40,
			autopilotAngle: 0,
		};

		const ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		//if user hovers animationBox hide instruction text and play animation
		canvasBoxRef.current.addEventListener('mouseover', () => {
			canvasAnimationInstructionRef.current.style.visibility = 'hidden';
			isCanvasPaused = false;
			animate();
		});

		//if mouse leaves animationBox show instruction text and pause animation
		canvasBoxRef.current.addEventListener('mouseleave', () => {
			canvasAnimationInstructionRef.current.style.visibility = 'visible';
			isCanvasPaused = true;
		});

		// create particles
		class Particle {
			//settings for particles
			constructor(x, y, radius) {
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.size = 250;
				this.frameX = Math.floor(Math.random() * 4);
				this.frameY = Math.floor(Math.random() * 4);
			}
			//draw particles on canvas
			draw() {
				ctx.drawImage(
					sprite,
					this.size * this.frameX,
					this.size * this.frameY,
					this.size,
					this.size,
					this.x,
					this.y,
					this.radius * 1.5,
					this.radius * 1.5
				);
			}
			update() {
				//animation
				if (mouse.x === undefined && mouse.y === undefined) {
					let newX =
						radius * 2 * Math.cos(mouse.autopilotAngle * (Math.PI / 180));
					let newY =
						radius * 0.9 * Math.sin(mouse.autopilotAngle * (Math.PI / 90));
					mouse.x = newX + canvas.width / 2;
					mouse.y = newY + canvas.height / 2;
				}
				mouse.autopilotAngle += 0.01;
			}
		}

		//handle if particles would be drawn onto eachother
		function handleOverlap() {
			let overlapping = false;
			let protection = 500;
			let counter = 0;

			while (particles.length < numberOfParticles && counter < protection) {
				let randomAngle = Math.random() * 2 * Math.PI;
				let randomRadius = Math.random() * mouse.radius;
				let particle = {
					x: mouse.x + randomRadius * Math.cos(randomAngle),
					y: mouse.y + randomRadius * Math.sin(randomAngle),
					radius: Math.floor(Math.random() * 30) + 10,
				};
				overlapping = false;
				for (let i = 0; i < particles.length; i++) {
					let previousParticle = particles[i];
					let dx = particle.x - previousParticle.x;
					let dy = particle.y - previousParticle.y;
					let distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < particle.radius + previousParticle.radius) {
						overlapping = true;
						break;
					}
				}
				if (!overlapping) {
					particles.unshift(
						new Particle(particle.x, particle.y, particle.radius)
					);
				}
				counter++;
			}
		}

		//call animation
		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < particles.length; i++) {
				particles[i].draw();
				if (isCanvasPaused == false) {
					particles[i].update();
				}
			}
			handleOverlap();
			if (particles.length >= numberOfParticles) {
				for (let i = 0; i < 3; i++) {
					particles.pop();
				}
			}
			hue += 2;
			requestAnimationFrame(animate);
		}

		//animation speed
		let autopilot = setInterval(function () {
			mouse.x = undefined;
			mouse.y = undefined;
		}, 40);
	});

	return (
		<div className='canvasAnimation' ref={canvasBoxRef}>
			<canvas id='canvas1' ref={canvasRef}></canvas>
			<svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
				<defs>
					<filter id='goo'>
						<feGaussianBlur
							in='SourceGraphic'
							stdDeviation='10'
							result='blur'
						/>
						<feColorMatrix
							in='blur'
							mode='matrix'
							values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9'
							result='goo'
						/>
						<feBlend in='SourceGraphic' in2='goo' />
					</filter>
				</defs>
			</svg>
			<p
				id='Canvas-instruction'
				ref={canvasAnimationInstructionRef}
				style={{
					zIndex: 100,
					position: 'relative',
					color: 'purple',
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

export default CanvasAnimation;
