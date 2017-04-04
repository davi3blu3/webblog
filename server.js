var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webblog')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/blogpost', function(req, res) {
    console.log('hello from server - post received');
    console.log('title: ', req.body.title);
    console.log('body: ', req.body.body);
    res.status(200).send('Ok');
});

app.listen(3000, function() {
    console.log('express is listening on port 3000');
});