import Mongoose from 'mongoose';

const todoSchema = new Mongoose.Schema(
	{
		content: String,
		isComplete: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

class Todo {
	static getListTodoByDate(begin, end) {
		return this.where('created_at').gt(begin).lt(end);
	}
}

todoSchema.loadClass(Todo);

export default Mongoose.model('Todo', todoSchema);
