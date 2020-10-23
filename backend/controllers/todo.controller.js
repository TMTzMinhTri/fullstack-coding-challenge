import express from 'express';
import Todo from '../models/todo.model.js';
import success from '../config/success.js';
import error from '../config/error.js';

var router = express.Router();
router.use(success);
router.use(error);

router.get('/', async function (req, res) {
	const { begin, end } = req.query;
	if (!begin) {
		return res.error('param_error', "begin can't be blank");
	}
	if (!end) {
		return res.error('param_error', "end can't be blank");
	}
	try {
		const todos = await Todo.getListTodoByDate(begin, end);
		return res.success(todos);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.post('/', async function (req, res) {
	const { content } = req.body;
	if (!content) {
		return res.error('param_error', "content can't be blank");
	}
	try {
		const newTodo = new Todo({ content });
		await newTodo.save();
		return res.success(newTodo);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.patch('/:id', async function (req, res) {
	const { id } = req.params;
	const { isComplete } = req.body;
	if (isComplete === undefined) {
		return res.error('param_error', "isComplete can't be blank");
	}
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
