var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// parse application/json
app.use(bodyParser.json())

var templating = require('consolidate');
app.engine('hbs', templating.handlebars);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views'); // + '/views'

var request = require('request');
var urlutils = require('url');

app.get('/', function(req, res){
	res.render('index', {
		title: 'Главная',
		h1: 'Создание сайта сервис центров',
	});
});

app.get('/profile', function(req, res){
	res.render('profile', {
		title: 'Профиль',
		h1: 'Профиль',
	});
});


app.listen(8080);
console.log('Express server listening on port 8080');
