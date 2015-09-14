import express from 'express';

var router = express.Router();

//create a new request object
router.post('/', (req, res) => {

	let request = req.body;

	models.request.create(request)
	.then((result)=>{

		logger.info('created a new request ');
		logger.debug(request);

		res.status(201).send(result);
	})
	.catch((error)=>{
		logger.error(error);
		res.status(400).send(error);
	});
	
});

//update an existing model or create new instance if not
router.put('/', (req, res) => {
	res.send('update an existing model or create new instance if not');
});

//update attributes for a model.
router.put('/:id', (req, res) => {
	res.send('update attributes for a model.');
});

//update instances of the model matching the criteria
router.post('/update', (req, res) => {
	res.send('update instances of the model matching the criteria.');
});

//find all instances matched by the filter
router.get('/', (req, res) => {
	res.send('find all instances matched by the filter');
});

//get first instance matching the filter
router.get('/findOne', (req, res) => {
	res.send('get first instance matching the filter');
});

//get an instance by id
router.get('/:id', (req, res) => {
	res.send('get an instance by id');
});

//check weather an instance exists
router.get('/:id/exists', (req, res) => {
	res.send('check weather an instance exists');
});

//delete an instance by id
router.delete('/:id', (req, res) => {
	res.send('delete an instance by id');
});

module.exports = router;
