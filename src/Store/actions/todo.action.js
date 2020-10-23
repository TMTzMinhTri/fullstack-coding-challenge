import { getListTodo, deleteTodo, updateTodo, createTodo } from '../../Api/todos.api';

export const getTodos = (date) => (dispatch) => {
	getListTodo(date).then((rsp) => {
		if (rsp.status === 200) dispatch({ type: 'TODOS', payload: rsp.data });
	});
};

export const removeTodoItem = (id) => (dispatch) => {
	deleteTodo(id).then((rsp) => {
		if (rsp.status === 200) dispatch({ type: 'DELETE_TODO', payload: rsp.data });
	});
};

export const updateTodoItem = (id, isComplete) => (dispatch) => {
	updateTodo(id, { isComplete }).then((rsp) => {
		if (rsp.status === 200) dispatch({ type: 'UPDATE_TODO', payload: rsp.data });
	});
};

export const createNewTodo = (content, callback) => (dispatch) => {
	createTodo({ content }).then((rsp) => {
		if (rsp.status === 200) {
			dispatch({ type: 'CREATE_TODO', payload: rsp.data });
		}
		callback();
	});
};
