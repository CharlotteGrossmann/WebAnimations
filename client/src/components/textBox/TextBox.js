import '../../styles/TextBox.css';

function TextBox({ title, textId, float }) {
	var dict = {
		gifFactFact:
			'Ursprünglich sollte sich das GIF gar nicht bewegen. Steve Wilhite hatte den Auftrag ein neues Bildformat zu entwickeln, das auf möglichst vielen Geräten funktioniert und wenig Speicherplatz braucht. Zusätzlich baute er aber noch zwei weitere Features ein: Bilder konnten mehrmals hintereinander in einer Datei abgelegt werden, womit Browser die Bilder in einer kurzen Abfolge darstellen konnten, um so Animationen zu erzeugen.',

		gifHardFact:
			'Entstehungsjahr: 1987 Entwickler: Steve Wilhite von CompuServe. Pro: einfach und für jeden zugänglich, Videoinhalte möglich, in jedem Browser abspielbar. Con: womöglich große Dateigrößen, kein Alphakanal, kleine Kompression, pixelbasiert (daher nicht skalierbar)',

		//insert all text here
	};
	var content = dict[textId];

	return (
		<div className='text-box'>
			<div className={float}>
				<span className='title'>{title}</span>
				<p className='content'>{content}</p>
			</div>
		</div>
	);
}

export default TextBox;
