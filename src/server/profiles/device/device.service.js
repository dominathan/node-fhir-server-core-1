/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDevice = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDevice\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceById\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.createDevice = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createDevice\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updateDevice = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updateDevice\'';
	logger.info(message);
	reject(new Error(message));
});
