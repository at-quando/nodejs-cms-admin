var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  salary: Number,
  status: {
    type: Number,
    default: 0
  },
  type: Number,
  content: String,
  deadline: Date,
  worker: Array,
  contract: {
    contract_id: String,
    role: String
  },
  agency_id: {
    type: Schema.ObjectId,
    ref: 'Agency'
  }
});

var Todo = module.exports = mongoose.model('Todo', TodoSchema);
