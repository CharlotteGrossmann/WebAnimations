import '../../styles/Box.css';

function TableTextBox({ color, year, dev, pro, con }) {
	return (
		<div className='TableTextBox'>
			<div className={'box ' + color}>
				<span className='title'>Hard Facts</span>
				<table>
					<tr>
						<td className='category'>Entstehungsjahr</td>
						<td className='table-content'>{year}</td>
					</tr>
					<tr>
						<td className='category'></td>
						<td className='table-content'></td>
					</tr>
					<tr>
						<td className='category'>Entwickler</td>
						<td className='table-content'>{dev}</td>
					</tr>
					<tr>
						<td className='category'></td>
						<td className='table-content'></td>
					</tr>
					<tr>
						<td className='category'>Pro</td>
						<td className='table-content'>{pro}</td>
					</tr>
					<tr>
						<td className='category'></td>
						<td className='table-content'></td>
					</tr>
					<tr>
						<td className='category'>Con</td>
						<td className='table-content'>{con}</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default TableTextBox;
