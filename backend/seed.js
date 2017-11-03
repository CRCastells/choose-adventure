const mongoose = require('mongoose');


//bring in phrase model to build strings to use
let phrase = require('./models/phrase');

phrases = [
	{
		phrase: 'Banana'
	},
	{
		phrase: 'bottle'
	},
	{
		phrase: 'Buzz'
	},
	{
		phrase: 'Chair'
	},
	{
		phrase: 'computer'
	},
	{
		phrase: 'shoe'
	},
	{
		phrase: 'glasses'
	},
	{
		phrase: 'Scooby Doo'
	},
	{
		phrase: 'Luck be in the air Tonight'
	},
	{
		phrase: 'jackson pollock'
	},
	{
		phrase: 'abraham lincoln'
	},
	{
		phrase: 'America'
	},
	{
		phrase: 'honey badger'
	}
];




phrase.remove({}, (err) => {
	if (err) throw err;
	phrase.create(phrases, (err, phrases) => {
		console.log(`Created ${phrases.length} phrases.`);
	});
});