var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PlanSchema = new Schema({
  content: String,
  costume: String,
  mark_time: Date,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
});

var Plan = module.exports = mongoose.model('Plan', PlanSchema);

PlanSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});