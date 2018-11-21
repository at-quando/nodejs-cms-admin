var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CollegeSchema = new Schema({
  key: String,
  name: String
});

var College = module.exports = mongoose.model('College', CollegeSchema);
