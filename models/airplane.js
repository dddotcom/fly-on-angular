var mongoose = require('mongoose');

var AirplaneSchema = new mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  picture: String
});

module.exports = mongoose.model('Airplane', AirplaneSchema);
