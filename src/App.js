import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RangeDatePicker } from 'react-google-flight-datepicker';

import 'react-google-flight-datepicker/dist/main.css';

import { ListTodo } from './Components/ListTodos.js';
import { FormCreate } from './Components/formCreate.js';
import { getTodos } from './Store/actions/todo.action.js';

function App({ todos, getTodos }) {
	const [date, setDate] = React.useState({
		startDate: new Date(),
		endDate: new Date(),
	});

	React.useEffect(() => {
		const { startDate, endDate } = date;
		getTodos({ begin: startDate.toISOString(), end: endDate.toISOString() });
	}, [getTodos, date]);

	return (
		<div>
			<RangeDatePicker startDate={date.startDate} endDate={date.endDate} onChange={(startDate, endDate) => setDate({ startDate, endDate })} />
			<FormCreate />
			<ListTodo listTodo={todos} />
		</div>
	);
}
const mapState = (state) => ({
	todos: state.todo.todos,
});
const mapAction = (dispath) =>
	bindActionCreators(
		{
			getTodos,
		},
		dispath
	);

export default connect(mapState, mapAction)(App);
