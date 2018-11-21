var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  salary: Number,
  status: Number,
  type: Number,
  note: String,
  contract: {
    contract_id: String,
    role: String
  }
});

var Todo = module.exports = mongoose.model('Todo', TodoSchema);
