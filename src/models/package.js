var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PackageSchema = new Schema({
  name: String,
  price: Number,
  price_first: Number,
  offer: String,
  types: String,
  aspect: String,
  level: Number,
  duration: String,
  agency_id: {
    type: Schema.ObjectId,
    ref: 'Agency'
  },
  user_id: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
});

var Package = module.exports = mongoose.model('Package', PackageSchema);

PackageSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});