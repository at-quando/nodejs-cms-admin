var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  type: Number,
  name: String,
  agency_id: {
    type: Schema.ObjectId,
    ref: 'Agency'
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
});

var Department = module.exports = mongoose.model('Department', DepartmentSchema);

DepartmentSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});