var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: String,
  desc: String,
  link: String,
  type: Number,
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

var Video = module.exports = mongoose.model('Video', VideoSchema);

VideoSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});