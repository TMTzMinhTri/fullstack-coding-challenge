import express from 'express';
import Todo from '../models/todo.model.js';
import success from '../config/success.js';
import error from '../config/error.js';
import { requireQueryParams, requireBodyParam } from '../middleware/requireParams.js';

var router = express.Router();
router.use(success);
router.use(error);

router.get('/', requireQueryParams(['begin', 'end']), async function (req, res) {
	const { begin, end } = req.query;
	try {
		const todos = await Todo.getListTodoByDate(begin, end);
		return res.success(todos);
	} catch (error) {
		console.log(error);
		if (error.message === 'invalid_date') return res.error('param_error', error.message);
		else return res.status(500).send(error.message);
	}
});

router.post('/', requireBodyParam(['content']), async function (req, res) {
	const { content } = req.body;
	try {
		const newTodo = new Todo({ content });
		await newTodo.save();
		return res.success(newTodo);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.patch('/:id', requireBodyParam(['isComplete']), async function (req, res) {
	const { id } = req.params;
	const { isComplete } = req.body;
	try {
		const todoUpdated = await Todo.findByIdAndUpdate(id, { isComplete }, { new: true }).exec();
		if (todoUpdated === null) {
			return res.error('record_not_found', 'Todo not found');
		}
		return res.success(todoUpdated);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.delete('/:id', async function (req, res) {
	const { id } = req.params;
	try {
		const todoDeteled = await Todo.findByIdAndDelete(id).exec();
		if (todoDeteled === null) {
			return res.error('record_not_found', 'Todo not found');
		}
		return res.success(todoDeteled);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

export default router;
