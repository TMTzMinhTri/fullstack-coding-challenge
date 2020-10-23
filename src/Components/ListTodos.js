import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeTodoItem, updateTodoItem } from '../Store/actions/todo.action';

export const ListTodoComponent = ({ listTodo, removeTodoItem, updateTodoItem }) => {
	const removeTodo = (id) => {
		removeTodoItem(id);
	};
	const updateStatus = (id, value) => {
		console.log(id, value);
		updateTodoItem(id, value);
	};
	return <ul>{listTodo.map((it) => renderTodo(it, removeTodo, updateStatus))}</ul>;
};
const renderTodo = (Todo, removeTodo, updateStatus) => (
	<li key={Todo._id}>
		<input type='checkbox' checked={Todo.isComplete === true ? true : false} onChange={(e) => updateStatus(Todo._id, e.target.checked)} />
		{Todo.content}
		{Todo.created_at}
		<button onClick={() => removeTodo(Todo._id)}>X</button>
	</li>
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
