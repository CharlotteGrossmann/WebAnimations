import PropTypes from 'prop-types';

function Button({ onClick, text }) {
	return (
		<button onClick={onClick} className='btn '>
			{text}
		</button>
	);
}

export default Button;
