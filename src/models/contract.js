var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Cost = require('./cost');

const ContractSchema = new Schema({
  representative: String,
  phone1: String,
  phone2: String,
  city: String,
  group: String,
  client: String,
  label: String,
  code: String,
  numerator: Number,
  members: {
    type: Array,
    default: []
  },
  deposit: Number,
  note: String,
  access_token: String,
  taken_dates: {
    type: Array,
    default: []
  },
  packages: {
    type: Array,
    default: []
  },
  costs: {
    type: Array,
    default: []
  },
  total: Number,
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

var Contract = module.exports = mongoose.model('Contract', ContractSchema);

ContractSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});