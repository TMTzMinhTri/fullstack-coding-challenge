import { Api } from './index';

export const getListTodo = ({ begin, end }) => {
	const path = `/api/todo/?begin=${begin}&end=${end}`;
	return Api.get(path);
};

export const createTodo = (data) => {
	const path = `/api/todo`;
	return Api.post(path, data);
};

export const updateTodo = (id, data) => {
	const path = `/api/todo/${id}`;
	return Api.patch(path, data);
};

export const deleteTodo = (id) => {
	const path = `/api/todo/${id}`;
	return Api.delete(path);
};
