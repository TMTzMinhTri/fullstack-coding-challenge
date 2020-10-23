import Mongoose from 'mongoose';

export default async function () {
	try {
		Mongoose.set('debug', true);
		await Mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
		console.log('connected database');
	} catch (error) {
		console.log(err.message);
		process.exit(1);
	}
}
