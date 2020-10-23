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
		const startDate = new Date(begin);
		const endDate = new Date(end);
		const beginingOfDay = new Date(startDate.setHours(0, 0, 0, 0));
		const endOfDay = new Date(endDate.setHours(23, 59, 59, 999));
		return this.where('created_at').gte(beginingOfDay).lte(endOfDay);
	}
}

todoSchema.loadClass(Todo);

export default Mongoose.model('Todo', todoSchema);
