var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: String,
  colleges: Array
});

var City = module.exports = mongoose.model('City', CitySchema);
