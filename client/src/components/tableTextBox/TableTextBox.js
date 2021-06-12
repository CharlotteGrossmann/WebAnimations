import '../../styles/Box.css';

function TableTextBox({ color, year, dev, pro, con }) {
	return (
		<div className='TableTextBox'>
			<div className={'box ' + 'box-' + color}>
				<span className='box-title'>Hard Facts</span>
				<table className='box-table'>
					<tr>
						<td className='box-category'>Entstehungsjahr</td>
						<td className='box-table-content'>{year}</td>
					</tr>
					<tr>
						<td className='box-category'></td>
						<td className='box-table-content'></td>
					</tr>
					<tr>
						<td className='box-category'>Entwickler</td>
						<td className='box-table-content'>{dev}</td>
					</tr>
					<tr>
						<td className='box-category'></td>
						<td className='box-table-content'></td>
					</tr>
					<tr>
						<td className='box-category'>Pro</td>
						<td className='box-table-content'>{pro}</td>
					</tr>
					<tr>
						<td className='box-category'></td>
						<td className='box-table-content'></td>
					</tr>
					<tr>
						<td className='box-category'>Con</td>
						<td className='box-table-content'>{con}</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default TableTextBox;
