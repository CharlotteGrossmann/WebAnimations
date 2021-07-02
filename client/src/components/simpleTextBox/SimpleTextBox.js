//simple text box
//import css
import '../../styles/Box.css';

//dictionary with textId and respective text
function TextBox({ title, textId, color }) {
	var dict = {
		gifFunFact:
			'Ursprünglich sollte sich das GIF gar nicht bewegen. Steve Wilhite hatte den Auftrag ein neues Bildformat zu entwickeln, das auf möglichst vielen Geräten funktioniert und wenig Speicherplatz braucht. Zusätzlich baute er aber noch zwei weitere Features ein: Bilder konnten mehrmals hintereinander in einer Datei abgelegt werden, womit Browser die Bilder in einer kurzen Abfolge darstellen konnten, um so Animationen zu erzeugen.',

		gifText:
			'1987 wurde das erste GIF entwickelt, womit erstmals Animationen im Web möglich waren. GIF ist ein Bildformat, welches übereinanderliegende Einzelbilder speichert, was dann als Animation interpretiert wird. Zwar zeichnet sich das GIF dadurch durch eine sehr einfache Handhabung und Zugänglichkeit aus, allerdings kann es aufgrund der kleinen Kompression schnell zu großen Dateigrößen kommen. Nach dem Tod von Flash erlebte das GIF ein Comeback und ist heute durch Social Media und Messenger Dienste populärer denn je.',

		jsFunFact:
			'JavaScript wurde ursprünglich Mocha genannt. Es wurde dann jedoch schnell unter dem Namen LiveScript und später dann JavaScript bekannt.',

		jsText:
			'JavaScript ist eine Skriptsprache, welche ursprünglich 1995 als Erweiterung der Möglichkeiten von HTML und CSS, entwickelt wurde. Heute findet es aber auch in vielen anderen Bereichen, außerhalb von Browsern, Anwendung. JavaScript ermöglicht komplexere Animationen von DOM-Elementen, welche meistens aus bouncing, pausing, stopping und slowing down bestehen.',

		flashFunFact:
			'Durch die vielen Möglichkeiten und die einfache Handhabung, die Flash bat, kam es zu einer Periode des Web Animations Booms, in der das Internet von zu vielen, wild animierten Elementen gekennzeichnet war.',

		flashText:
			'1997 begann die Ära des Flash und damit auch der Web Animations Boom. Flash war ein von Macromedia entwickeltes Web Plugin. Es hat die Entwicklung des Internets zu einem großen Teil vorangetrieben, da damit sehr einfach vektorbasierte Animationen, mit kleinen Datengrößen, erstellt werden konnten, welche überall auf einer Seite eingepflegt werden konnten. Allerdings brauchte man ein Browser Plugin, um die Flash Animationen abspielen zu können, während sie auf mobilen Geräten überhaupt nicht funktionierten. Spätestens als Steve Jobs 2010 bekannt gab Flash auf Apple Produkten nicht zu unterstützen, war die Ära des Flash zu Ende. 2020 wurde der Support auf allen Browsern endgültig eingestellt.',

		cssText:
			'Cascading Style Sheets, kurz CSS, ist eine Stylesheet- /Formatierungssprache, die genutzt wird, um HTML Elemente zu stylen. Sie ist gemeinsam mit HTML und JavaScript eine der Kernsprachen des Internets. CSS ermöglicht Animationen bzw. Übergänge zwischen einzelnen Zuständen mittels Keyframes. Dabei sind sowohl Pixel- als auch Vektoranimationen möglich. ',

		svgText:
			'SVGs (Scalable Vector Graphics) ist die vom World Wide Web Consortium (W3C) empfohlene Spezifikation zur Beschreibung zweidimensionaler Vektorgrafiken. Praktisch alle relevanten Webbrowser können einen Großteil des Sprachumfangs darstellen. Animationen werden von SVG mittels der eigenen Syntax SMIL, aber auch CSS und JavaScript unterstützt.',
		svgFunFact:
			'Microsoft ging lange der Empfehlung des W3C nicht nach und unterstützte in seinen Anwendungen nur deren eigens entwickelte Vektorsprache VML. Erst ab 2011 wurde SVG von Microsofts Browser Internet Explorer nativ unterstützt.',

		canvasText:
			'Ein Canvas-Element ist ein in der Sprache HTML mit Höhen- und Breiten-Angaben beschriebener Bereich, in den per JavaScript gezeichnet werden kann. Neben normalen Linien- und Rechteckszeichenfunktionen ermöglicht Canvas unter anderem das Zeichnen von Kreisbögen, Bézierkurven, Farbverläufen, Grafiken (PNG, GIF, JPEG), Transparenz und Text. Objekte und Objektgruppen können dabei verschoben, rotiert und skaliert werden.		',
		videoText:
			'Das HTML5 Video wurde entwickelt, um einen neuen Standard für Videos im Web zu schaffen und so die bisherige Lösung – das Adobe Flash Plugin – abzulösen. Seit dessen Einführung 2007 begannen immer mehr Plattformen HTML5 Videos zu unterstützen, wie beispielsweise Netflix, YouTube, und Facebook. Spätestens seit 2020, mit der Beerdigung von Flash, gilt HTML5 Video als das einzige Format für Videos im Web, welches fast überall supportet wird.',

		webglText:
			'Als eine Weiterentwicklung des HTML Canvas Elements wurde 2011 WebGL veröffentlicht. WebGL (Web Graphics Library) ist eine JavaScript Programmierschnittstelle, mit deren Hilfe komplexe 3D-Grafiken in Webbrowsern dargestellt werden können. WebGL eröffnete ganz neue Möglichkeiten im Web, wie beispielsweise Animationen in Virtual Reality. Da dafür oftmals komplizierte Programmierung notwendig ist, wird dabei meistens auf Frameworks, wie beispielsweise Three.js, zurückgegriffen.',
		lottieText:
			'2015 machte sich Hernan Torrisi die Scripting Fähigkeiten von Adobe After Effects zu Nutze und veröffentlichte ein Plugin namens Bodymovin, das JSON Formate einer Animation exportieren kann. Zwei Jahre später erkannte Airbnb das Potential dieser Animationen und entwickelte iOS und Android Libraries, welche diese JSON Animationsformate rendern konnten. Diese nannten sie "Lottie". Mit Lottie war eine nie dagewesene, einfache Erstellung und Einbindung von Vektoranimationen möglich.',

		lottieFunFact:
			'Lottie hat seinen Namen von Charlotte "Lotte" Reiniger, eine deutsche Animationsfilmerin und die führende Pionierin der Silhouetten Animation.',
	};

	//let impleTetContent be the wanted text
	let simpleTetContent = dict[textId];
	return (
		<div className='text-box'>
			<div className={'box ' + 'box-' + color}>
				<span className='box-title'>{title}</span>
				<p className='box-simpleTextContent'>{simpleTetContent}</p>
			</div>
		</div>
	);
}

export default TextBox;
