import Waterline from 'waterline';

module.exports = Waterline.Collection.extend({

    identity: 'user',
    connection: 'default',

    attributes: {
        firstName: 'string',
        lastName: 'string'
    },

    sayhi : (cb) => {
    	logger.debug('saying hello');
    	return cb('hi boys');
    }
});
