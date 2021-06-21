import './CanvasAnimation.css';
import forms from './forms.png';
function CanvasAnimation() {
	// variables
	const canvas = document.getElementById('canvas1');
	const sprite = new Image();
	sprite.src = forms;
	let hue = 0;
	let particles = [];
	let numberOfParticles = 100;
	let radius = window.innerWidth / 5;

	// handle mouse
	const mouse = {
		x: 0,
		y: 0,
		radius: 40,
		autopilotAngle: 0,
	};

	if (canvas) {
		const ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.addEventListener('mousemove', function (e) {
			mouse.x = e.x;
			mouse.y = e.y;
		});
		// particles
		class Particle {
			constructor(x, y, radius) {
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.size = 250;
				this.frameX = Math.floor(Math.random() * 4);
				this.frameY = Math.floor(Math.random() * 4);
			}
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
				// autopilot when mouse leaves canvas
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

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < particles.length; i++) {
				particles[i].draw();
				particles[i].update();
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
		animate();

		window.addEventListener('resize', function () {
			particles = [];
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			numberOfParticles = 100;
			ctx.textBaseline = 'middle';
			radius = window.innerWidth / 5;
		});

		let autopilot = setInterval(function () {
			mouse.x = undefined;
			mouse.y = undefined;
		}, 40);

		canvas.addEventListener('mouseleave', function () {
			autopilot = setInterval(function () {
				mouse.x = undefined;
				mouse.y = undefined;
			}, 40);
		});

		canvas.addEventListener('mouseenter', function () {
			clearInterval(autopilot);
			autopilot = undefined;
		});
	}

	return (
		<div className='canvasn'>
			<canvas id='canvas1'></canvas>
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
		</div>
	);
}

export default CanvasAnimation;
