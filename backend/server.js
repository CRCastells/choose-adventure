const express = require('express');
const app = express();
const mongoose = require('mongoose');
const phrases = require('./models/phrase.js');

app.use(express.json());


app.get('/api', (req, res) => {
	res.json(
	{
		"title": "Welcome to my hangman API",
		"endpoints": [
			{
				"verb": "get",
				"path": '/api/phrases',
				"message": "returns a json array of all phrases in DB"
			},
			{
				"verb": "get",
				"path": '/api/phrases/:id',
				"message": "returns a json response of matching phrase in DB"
			},
			{
				"verb": "get",
				"path": '/api/random',
				"message": "returns a random json response of a phrase in DB"
			},
			{
				"verb": "post",
				"path": '/api/phrases',
				"message": "creates a new phrase in db and returns created phrase"
			},
			{
				"verb": "put",
				"path": '/api/phrases/:id',
				"message": "edits a matching phrase in db and returns updated phrase"
			},
			{
				"verb": "delete",
				"path": '/api/phrases/:id',
				"message": "deletes seleced phrase and returns status"
			}
		]
	});
});

app.get('/api/phrases', (req, res) => {
	phrases.find({}, (err, phrases) => {
		if(err) throw err;
		res.json({phrases});
	});
});

app.get('/api/phrases/:id', (req, res) => {
	phrases.findOne({_id: req.params.id}, (err, phrase) => {
		if(err) throw err;
		res.json({phrase});
	});
});

app.get('/api/random', (req, res) => {
	phrases.find({} , (err, phrases) => {
		let random = Math.floor(Math.random()*phrases.length);
		res.json(phrases[random]);
	});
});

app.post('/api/phrases', (req, res) => {
	phrases.create(req.body, (err, phrase) => {
		if (err) res.json(err);
		res.json({phrase});
	});
});

app.put('/api/phrases/:id', (req, res) => {
	phrases.findOne({_id: req.params.id}, (err, phrase) => {
		phrase.update(phrase, req.body, (err, phrase) => {
			res.json({phrase});
		});
	});
});

app.delete('/api/phrase/:id', (req, res) => {
	phrases.remove({_id: req.params.id}, (err, status) => {
		res.json({status});
	});
});


app.listen(3000, () => {
	console.log('Server started on port: 3000');
});