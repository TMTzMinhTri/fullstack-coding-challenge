import React from 'react';
import { connect } from 'react-redux';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import { Container, Row, Col } from 'reactstrap';
import { isNull } from 'lodash';

import 'react-google-flight-datepicker/dist/main.css';

import { ListTodo } from './components/ListTodos.js';
import { FormCreate } from './components/FormCreate.js';
import { getTodos } from './store/actions/todo.action.js';

function App({ todos, getTodos }) {
	const [date, setDate] = React.useState({
		startDate: new Date(),
		endDate: new Date(),
	});

	React.useEffect(() => {
		const { startDate, endDate } = date;
		if (!isNull(endDate) && !isNull(startDate)) {
			getTodos({ begin: startDate.toISOString(), end: endDate.toISOString() });
		}
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
const mapAction = {
	getTodos,
};

export default connect(mapState, mapAction)(App);
