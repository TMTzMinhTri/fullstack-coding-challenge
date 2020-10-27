import React from 'react';
import { connect } from 'react-redux';
import { createNewTodo } from '../store/actions/todo.action';
import { Button, Input, Form, FormGroup } from 'reactstrap';
import styled from 'styled-components';

const CustomFormGroup = styled(FormGroup)`
	width: 80%;
`;
const CustomButton = styled(Button)`
	width: 20%;
`;

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
		<Form onSubmit={submitCreateTodo} inline>
			<CustomFormGroup>
				<Input type='text' ref={inputRef} value={content} onChange={(e) => setContent(e.target.value)} className='w-100 mr-2' placeholder='Nhập ghi chú' />
			</CustomFormGroup>
			<CustomButton type='submit' color='primary'>
				Thêm
			</CustomButton>
		</Form>
	);
};
const mapAction = {
	createNewTodo,
};
export const FormCreate = connect(null, mapAction)(FormCreateComponent);
