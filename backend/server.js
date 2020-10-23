import express from 'express';
import morgan from 'morgan';
import Database from './config/database.js';
import todo from './controllers/todo.controller.js';

const app = express();
const port = 3001;
Database();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/todo', todo);

app.listen(port, () => {
	console.log('Backend is ready!');
});
