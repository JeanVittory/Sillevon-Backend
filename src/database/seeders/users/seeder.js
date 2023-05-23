const mongoose = require('mongoose');
const userModel = require('../../../api/user/user.model');
const env = require('../../../config/dotenv');
const users = require('./users.json');

const seeder = async () => {
	try {
		mongoose.connect(env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
		await userModel.create(users);
		console.log('User seeder executed successfully');
		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

seeder();
