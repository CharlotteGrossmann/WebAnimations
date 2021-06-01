import SimpleTextBox from '../simpleTextBox/SimpleTextBox';
import Animation from '../animation/Animation';
import '../../styles/Timeline.css';
import Background from '../background/Background';
import TableTextBox from './../tableTextBox/TableTextBox';
function Timeline() {
	return (
		<div className='timeline'>
			<Background />
			<div className='left-column'>
				<section className='time-line-text '>
					<Animation animationId='gif' float='left' color='blue' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='JavaScrpt'
						textId='jsText'
						float='left'
						color='red'
					/>
					<TableTextBox
						float='left'
						color='red'
						year='1996'
						dev='Netscape'
						pro='mehr Flexibilität und Komplexität als CSS-basierte Animationen, basic Funktionen werden meist durch Einbindung von Libraries erweitert, einfache Animation von SVGs, dynamisch (kann auf Inputs des Users reagieren)'
						con='erhält SVG-Dateien nicht, wenn sie als Bild eingebettet sind'
					/>
					<SimpleTextBox
						title='Fun Fact'
						textId='jsFunFact'
						float='left'
						color='red'
					/>
				</section>
				<section className='time-line-text'>
					<Animation animationId='flash' float='left' color='cyan' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='CSS'
						textId='cssText'
						float='left'
						color='yellow'
					/>
					<TableTextBox
						float='left'
						color='yellow'
						year='1996'
						dev='CERN'
						pro='funktioniert gut auf mobilen Geräten und kann einfach responsive gestaltet werden, Vektor- und Pixelanimationen möglich, SVG-Animationen möglich, gute Performance'
						con='komplexe, realistische Bewegungen mit bezier easings nicht möglich, nicht alle SVG-Eigenschaften können mittels CSS animiert werden, kann nicht auf neue Inputs des Users reagieren '
					/>
				</section>
				<section className='time-line-text'>
					<Animation animationId='svg' float='left' color='lime' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='Canvas'
						textId='canvasText'
						float='left'
						color='purple'
					/>
					<TableTextBox
						float='left'
						color='purple'
						year='2004'
						dev='Apple'
						pro='gute Performance, komplexe Zeichnungen und Animationen in hochauflösenden Renderings, gute Einarbeitung von Interaktionen'
						con='responsive komplexer, nicht unbedingt scharf auf Retina-Displays'
					/>
				</section>
				<section className='time-line-text'>
					<Animation animationId='video' float='left' color='orange' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='WebGL'
						textId='webglText'
						float='left'
						color='navy'
					/>
					<TableTextBox
						float='left'
						color='navy'
						year='2011'
						dev='Khronos Group'
						pro='unglaublich komplexe visuelle Effekte, 3 Dimensionen möglich, VR möglich'
						con='schwieriger zu lernen als andere Animationen, schwierig responsive zu machen'
					/>
				</section>
				<section className='time-line-text'>
					<Animation animationId='lottie' float='left' color='turquoise' />
				</section>
			</div>

			{/* ---------------------------------------------------------- */}

			<div className='right-column'>
				<section className='time-line-text'>
					<SimpleTextBox
						title='GIF'
						textId='gifText'
						float='right'
						color='blue'
					/>

					<TableTextBox
						float='right'
						color='blue'
						year='1987'
						dev='CompuServe'
						pro='einfach und für jeden zugänglich, Videoinhalte möglich, in jedem Browser abspielbar'
						con='womöglich große Dateigrößen, kein Alphakanal, kleine Kompression, pixelbasiert (daher nicht skalierbar)'
					/>
					<SimpleTextBox
						title='Fun Fact'
						textId='gifFunFact'
						float='right'
						color='blue'
					/>
				</section>
				<section className='time-line-text '>
					<Animation animationId='js' float='right' color='red' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='Flash'
						textId='flashText'
						float='right'
						color='cyan'
					/>
					<TableTextBox
						float='right'
						color='cyan'
						year='1997'
						dev='Macromedia'
						pro='einfache Erstellung vektorbasierter Animationen, kleine Dateigrößen im SWF Format'
						con='Browser Plugin zum Abspielen notwendig, funktionierten nicht wirklich auf mobilen Geräten'
					/>
					<SimpleTextBox
						title='Fun Fact'
						textId='flashFunFact'
						float='right'
						color='cyan'
					/>
				</section>
				<section className='time-line-text'>
					<Animation animationId='css' float='right' color='yellow' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='SVG'
						textId='svgText'
						float='right'
						color='lime'
					/>
					<TableTextBox
						float='right'
						color='lime'
						year='2001'
						dev='World Wide Web Consortium'
						pro='Skalierbarkeit ohne Qualitätsverlust, da vektorbasiert'
						con='mit CSS nicht alle Eigenschaften animierbar, SVG eigener Syntax SMIL verliert an Support'
					/>
					<SimpleTextBox
						title='Fun Fact'
						textId='svgFunFact'
						float='right'
						color='lime'
					/>
				</section>
				<section className='time-line-text'>
					<Animation animationId='canvas' float='right' color='purple' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='HTML5 Video'
						textId='videoText'
						float='right'
						color='orange'
					/>
					<TableTextBox
						float='right'
						color='orange'
						year='2007'
						dev='Opera'
						pro='einfach und für jeden zugänglich, Videoinhalte möglich, in jedem Browser abspielbar'
						con='womöglich große Dateigrößen, kein Alphakanal, kleine Kompression, pixelbasiert (daher nicht skalierbar)'
					/>
				</section>
				<section className='time-line-text'>
					<Animation animationId='webgl' float='right' color='navy' />
				</section>
				<section className='time-line-text'>
					<SimpleTextBox
						title='Lottie'
						textId='lottieText'
						float='right'
						color='turquoise'
					/>
					<TableTextBox
						float='right'
						color='turquoise'
						year='2007'
						dev='Opera'
						pro='einfach und für jeden zugänglich, Videoinhalte möglich, in jedem Browser abspielbar'
						con='womöglich große Dateigrößen, kein Alphakanal, kleine Kompression, pixelbasiert (daher nicht skalierbar)'
					/>
					<SimpleTextBox
						title='Fun Fact'
						textId='lottieFunFact'
						float='right'
						color='turquoise'
					/>
				</section>
			</div>
		</div>
	);
}

export default Timeline;
