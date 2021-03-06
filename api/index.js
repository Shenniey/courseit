var express = require('express');
var app = express();
var url = 'mongodb://localhost:27017/courseit';
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
	if (err) {
		return console.log('Error: ', err);
	}
	console.log('worked');
    
  app.use(express.static('html'));
  app.use('/books', require('./books')(db));
  app.use('/courses', require('./courses')(db));
	app.use('/questions', require('./questions')(db));
	
	app.listen(3000);
});


//app.use('/books', require('./books'));
//app.use('/courses', require('./courses'));
//app.use('/questions', require('./questions'));
//app.listen(8000);
