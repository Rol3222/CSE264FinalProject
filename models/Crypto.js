const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cryptoSchema = new mongoose.Schema({

username:  String,
password: String,
balance: {
    type: Number,
    default: 0
}

 });


const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;
