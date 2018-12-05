var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductTypeSchema = new Schema({
  type: Number,
  attrs: Array,
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

var ProductType = module.exports = mongoose.model('ProductType', ProductTypeSchema);

ProductTypeSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});