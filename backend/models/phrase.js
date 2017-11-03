const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hangman');

let PhraseSchema = mongoose.Schema({
	phrase: String
});

let Phrase = mongoose.model('Phrase',PhraseSchema);

module.exports = Phrase;