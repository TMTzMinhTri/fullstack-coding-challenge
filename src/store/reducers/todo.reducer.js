const initState = {
	todos: [],
};

export default function (state = initState, action) {
	switch (action.type) {
		case 'TODOS':
			return { ...state, todos: action.payload };
		case 'CREATE_TODO':
			return { ...state, todos: [...state.todos, action.payload] };
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((it) => it._id !== action.payload._id),
			};
		case 'UPDATE_TODO':
			const index = state.todos.findIndex((it) => it._id === action.payload._id);
			const cloneTodos = [...state.todos];
			cloneTodos[index] = action.payload;
			return {
				...state,
				todos: cloneTodos,
			};
		default:
			return { ...state };
	}
}
