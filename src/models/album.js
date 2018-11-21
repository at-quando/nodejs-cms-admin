var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  desc: String,
  pictures: Array,
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

var Album = module.exports = mongoose.model('Album', AlbumSchema);

AlbumSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});