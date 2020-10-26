import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeTodoItem, updateTodoItem } from '../Store/actions/todo.action';
import { ListGroup, ListGroupItem, Col, Row, Button, Label } from 'reactstrap';
import Utils from '../Utils/index';

export const ListTodoComponent = ({ listTodo, removeTodoItem, updateTodoItem }) => {
	const removeTodo = (id) => {
		removeTodoItem(id);
	};
	const updateStatus = (id, value) => {
		console.log(id, value);
		updateTodoItem(id, value);
	};
	return <ListGroup className='w-100 mt-4'>{listTodo.map((it) => renderTodo(it, removeTodo, updateStatus))}</ListGroup>;
};
const renderTodo = (Todo, removeTodo, updateStatus) => (
	<ListGroupItem key={Todo._id}>
		<Label className='d-block'>
			<Row className='align-items-center'>
				<Col md={1}>
					<input type='checkbox' checked={Todo.isComplete === true ? true : false} onChange={(e) => updateStatus(Todo._id, e.target.checked)} />
				</Col>
				<Col md={9}>
					<div>{Todo.content}</div>
					<div className='text-muted'>{Utils.formatDate(Todo.created_at)}</div>
				</Col>
				<Col md={2}>
					<Button onClick={() => removeTodo(Todo._id)} color='danger' className='w-100'>
						X
					</Button>
				</Col>
			</Row>
		</Label>
	</ListGroupItem>
);

const mapAction = (dispath) =>
	bindActionCreators(
		{
			removeTodoItem,
			updateTodoItem,
		},
		dispath
	);

export const ListTodo = connect(null, mapAction)(ListTodoComponent);
