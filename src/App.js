import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import { Container, Row, Col } from 'reactstrap';

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
		<Container className='mt-3'>
			<Row className='justify-content-center flex-column align-items-center'>
				<Col md={6}>
					<RangeDatePicker className='p-0' startDate={date.startDate} endDate={date.endDate} onChange={(startDate, endDate) => setDate({ startDate, endDate })} />
				</Col>
				<Col md={6}>
					<div className='w-100 my-4'>
						<FormCreate />
						<ListTodo listTodo={todos} />
					</div>
				</Col>
			</Row>
		</Container>
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
