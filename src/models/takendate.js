var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Cost = require('./cost');

const TakenDateSchema = new Schema({
  start_time: Date,
  end_time: Date,
  content: String,
  plan: Array,
  note: String,
  address: String,
  employees: Array,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
});

var TakenDate = module.exports = mongoose.model('TakenDate', TakenDateSchema);

TakenDateSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});