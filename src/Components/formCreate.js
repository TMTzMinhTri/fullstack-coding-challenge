import React from 'react';
import { connect } from 'react-redux';
import { createNewTodo } from '../Store/actions/todo.action';
import { bindActionCreators } from 'redux';

const FormCreateComponent = ({ createNewTodo }) => {
	const inputRef = React.useRef(null);
	const [content, setContent] = React.useState('');

	React.useEffect(() => {
		inputRef.current.focus();
	}, []);
	const submitCreateTodo = (e) => {
		e.preventDefault();
		createNewTodo(content, () => {
			setContent('');
		});
	};
	return (
		<div>
			<form onSubmit={submitCreateTodo}>
				<input type='text' ref={inputRef} value={content} onChange={(e) => setContent(e.target.value)} />
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};
const mapAction = (dispath) =>
	bindActionCreators(
		{
			createNewTodo,
		},
		dispath
	);
export const FormCreate = connect(null, mapAction)(FormCreateComponent);
