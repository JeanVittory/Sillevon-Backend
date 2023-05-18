const busboy = require('busboy');
const cloudinary = require('cloudinary').v2;
const env = require('../config/dotenv');

cloudinary.config({
	cloud_name: env.CLOUDINARY_CLOUD_NAME,
	api_key: env.CLOUDINARY_API_KEY,
	api_secret: env.CLOUDINARY_API_SECRET,
});

const formData = (req, _, next) => {
	let uploadingFile = false;
	let uploadingCount = 0;

	const done = () => {
		if (uploadingFile) return;
		if (uploadingCount > 0) return;
		next();
	};

	const bb = busboy({ headers: req.headers });
	req.body = {};

	bb.on('field', (key, val) => {
		req.body[key] = val;
	});

	bb.on('file', (key, stream) => {
		uploadingFile = true;
		uploadingCount++;
		const cloud = cloudinary.uploader.upload_stream({ upload_preset: 'sillevon-sas' }, (err, res) => {
			if (err) throw new Error('Something went wrong!');
			req.body[key] = res.secure_url;
			uploadingFile = false;
			uploadingCount--;
			done();
		});

		stream.on('data', (data) => {
			cloud.write(data);
		});

		stream.on('end', () => {
			cloud.end();
		});
	});

	bb.on('finish', () => {
		done();
	});

	req.pipe(bb);
};

module.exports = { formData };
