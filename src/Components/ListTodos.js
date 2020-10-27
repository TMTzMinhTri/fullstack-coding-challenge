import React from 'react';
import { connect } from 'react-redux';
import { removeTodoItem, updateTodoItem } from '../store/actions/todo.action';
import { ListGroup, ListGroupItem, Col, Row, Button, Label } from 'reactstrap';
import { formatDate } from '../utils/index';

export const ListTodoComponent = ({ listTodo, removeTodoItem, updateTodoItem }) => {
	const removeTodo = (id) => {
		removeTodoItem(id);
	};
	const updateStatus = (id, value) => {
		updateTodoItem(id, value);
	};
	return (
		<ListGroup className='w-100 mt-4'>
			{listTodo.map((it) => (
				<TodoItem todo={it} removeTodo={removeTodo} updateStatus={updateStatus} key={it._id} />
			))}
		</ListGroup>
	);
};

const TodoItem = React.memo(({ todo, removeTodo, updateStatus }) => {
	return (
		<ListGroupItem>
			<Label className='d-block'>
				<Row className='align-items-center'>
					<Col md={1}>
						<input type='checkbox' checked={todo.isComplete === true ? true : false} onChange={(e) => updateStatus(todo._id, e.target.checked)} />
					</Col>
					<Col md={9}>
						<div>{todo.content}</div>
						<div className='text-muted'>{formatDate(todo.created_at)}</div>
					</Col>
					<Col md={2}>
						<Button onClick={() => removeTodo(todo._id)} color='danger' className='w-100'>
							X
						</Button>
					</Col>
				</Row>
			</Label>
		</ListGroupItem>
	);
});
const mapAction = {
	removeTodoItem,
	updateTodoItem,
};

export const ListTodo = connect(null, mapAction)(ListTodoComponent);
