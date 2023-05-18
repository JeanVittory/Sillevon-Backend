const mongoose = require('mongoose');
const genresModel = require('../../../api/genre/genre.model');
const genres = require('./genres.json');
const env = require('../../../config/dotenv');

mongoose.connect(env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

console.log(process.env.MONGODB_URI);

const seeder = async () => {
	try {
		await genresModel.create(genres);
		console.log('Genres seeder succesfully executed');
		process.exit();
	} catch (error) {
		console.log(error);
	}
};

seeder();
