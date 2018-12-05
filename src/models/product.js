var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  costHire: Number,
  costBuy: Number,
  shortDesc: String,
  desc: String,
  type: Object,
  attributes: Object,
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

var Product = module.exports = mongoose.model('Product', ProductSchema);

ProductSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});