var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CostSchema = new Schema({
  content: String,
  price: Number,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
});

var Cost = module.exports = mongoose.model('Cost', CostSchema);

CostSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});