var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  fbUrl: String,
  department: Object,
  phone: String,
  bankacc: String,
  bank: String,
  description: String,
  address: String,
  accessToken: String,
  avatar: String,
  agencies: {
    type: Array
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
});

var User = module.exports = mongoose.model('User', UserSchema);

UserSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});