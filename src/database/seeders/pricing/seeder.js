const mongoose = require('mongoose');
const pricingModel = require('../../../api/plan/plan.model');
const env = require('../../../config/dotenv');
const plans = require('./pricing.json');

mongoose.connect(env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const seeder = async () => {
	try {
		await pricingModel.create(plans);
		console.log('Pricing seeder succesfully executed');
		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

seeder();
