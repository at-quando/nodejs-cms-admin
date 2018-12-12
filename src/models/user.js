var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password:  {
    type: String,
    default: '123456'
  },
  age: Date,
  fbUrl: String,
  department: {
    type: Object,
    default: 0
  },
  phone: {
    type: String,
    default: ''
  },
  bankacc: {
    type: String,
    default: ''
  },
  bank: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  accessToken: String,
  avatar: {
    type: String,
    default: ''
  },
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