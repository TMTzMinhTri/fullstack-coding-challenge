import { getListTodo, deleteTodo, updateTodo, createTodo } from '../../api/todos.api';

export const getTodos = (date) => async (dispatch) => {
	const { status, data } = await getListTodo(date);
	if (status === 200) dispatch({ type: 'TODOS', payload: data });
};

export const removeTodoItem = (id) => async (dispatch) => {
	const { status, data } = await deleteTodo(id);
	if (status === 200) dispatch({ type: 'DELETE_TODO', payload: data });
};

export const updateTodoItem = (id, isComplete) => async (dispatch) => {
	const { status, data } = await updateTodo(id, { isComplete });
	if (status === 200) dispatch({ type: 'UPDATE_TODO', payload: data });
};

export const createNewTodo = (content, callback) => async (dispatch) => {
	const { status, data } = await createTodo({ content });
	if (status === 200) dispatch({ type: 'CREATE_TODO', payload: data });
	callback();
};
