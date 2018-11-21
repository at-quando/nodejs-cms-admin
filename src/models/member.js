var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MemberSchema = new Schema({
  name: String,
  phone: String,
  idCard: String,
  clothes: Array,
  clothesConfirm: Array,
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
});

var Member = module.exports = mongoose.model('Member', MemberSchema);

MemberSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});