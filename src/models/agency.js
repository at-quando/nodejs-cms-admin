var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AgencySchema = new Schema({
  name: String,
  desc: String,
  avatar: String,
  default: Boolean,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
  // user_id: {
  //   type: Schema.ObjectId,
  //   ref: 'User'
  // }
});

var Agency = module.exports = mongoose.model('Agency', AgencySchema);

AgencySchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});