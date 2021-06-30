//textbox for hard facts
//import css
import '../../styles/Box.css';

//dictionary with tableIds and respective hard facts
function TableTextBox({ color, tableId }) {
	var dict = {
		gif: [
			'1987',
			'CompuServe',
			'einfach und für jeden zugänglich, Videoinhalte möglich, in jedem Browser abspielbar',
			'womöglich große Dateigrößen, kein Alphakanal, kleine Kompression, nicht skalierbar',
		],
		javaScript: [
			'1996',
			'Netscape',
			'mehr Flexibilität und Komplexität als CSS Animationen, Einbindung von Libraries für mehr Optionen, einfache Animation von SVGs, dynamisch (kann auf Inputs des Users reagieren)',
			'erhält SVG-Dateien nicht, wenn sie als Bild eingebettet sind',
		],
		svg: [
			'2001',
			'World Wide Web Consortium',
			'Skalierbarkeit ohne Qualitätsverlust, da vektorbasiert',
			'mit CSS nicht alle Eigenschaften animierbar, SVG eigener Syntax SMIL verliert an Support',
		],
		video: [
			'2007',
			'Opera',
			'einfach und für jeden zugänglich, Videoinhalte möglich, in jedem Browser abspielbar',
			'womöglich große Dateigrößen, kein Alphakanal, kleine Kompression, pixelbasiert (daher nicht skalierbar)',
		],
		lottie: [
			'2017',
			'Airbnb',
			'einfache Umsetzung (auch für Designer), kleine Dateigrößen, einfache Einbindung',
			'funktioniert nur mit AfterEffects, Übergänge zwischen Screens nicht möglich',
		],
		webGL: [
			'2011',
			'Khronos Group',
			'unglaublich komplexe visuelle Effekte, 3 Dimensionen möglich, VR möglich',
			'schwieriger zu lernen als andere Animationen, schwierig responsive zu machen',
		],
		canvas: [
			'2004',
			'Apple',
			'gute Performance, komplexe Zeichnungen und Animationen in hochauflösenden Renderings, gute Einarbeitung von Interaktionen',
			'responsive komplexer, nicht unbedingt scharf auf Retina-Displays',
		],
		flash: [
			'1997',
			'Macromedia',
			'einfache Erstellung vektorbasierter Animationen, kleine Dateigrößen im SWF Format',
			'Browser Plugin zum Abspielen notwendig, funktionierten nicht wirklich auf mobilen Geräten',
		],
		css: [
			'1996',
			'CERN',
			'funktioniert gut auf mobilen Geräten und kann einfach responsive gestaltet werden, Vektor- und Pixelanimationen möglich, gute Performance',
			'komplexe, realistische Bewegungen mit bezier easings nicht möglich, kann nicht auf neue Inputs des Users reagieren ',
		],
	};

	//let table content be wnated hard facts
	let tableContent = dict[tableId];

	return (
		<div className='TableTextBox'>
			<div className={'box ' + 'box-' + color}>
				<span className='box-title'>Hard Facts</span>
				<table className='box-table'>
					<tr>
						<td className='box-category'>Entstehungsjahr</td>
						<td className='box-table-content'>{tableContent[0]}</td>
					</tr>
					<tr>
						<td className='box-category'></td>
						<td className='box-table-content'></td>
					</tr>
					<tr>
						<td className='box-category'>Entwickler</td>
						<td className='box-table-content'>{tableContent[1]}</td>
					</tr>
					<tr>
						<td className='box-category'></td>
						<td className='box-table-content'></td>
					</tr>
					<tr>
						<td className='box-category'>Pro</td>
						<td className='box-table-content'>{tableContent[2]}</td>
					</tr>
					<tr>
						<td className='box-category'></td>
						<td className='box-table-content'></td>
					</tr>
					<tr>
						<td className='box-category'>Con</td>
						<td className='box-table-content'>{tableContent[3]}</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default TableTextBox;
