var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PictureSchema = new Schema({
  title: String,
  desc: String,
  link: String,
  type: Number,
  agency_id: {
    type: Schema.ObjectId,
    ref: 'Agency'
  },
  album_id: {
    type: Schema.ObjectId,
    ref: 'Album'
  },
  article_id: {
    type: Schema.ObjectId,
    ref: 'Article'
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  },
  updated_at: { type: Date }
});

var Picture = module.exports = mongoose.model('Picture', PictureSchema);

PictureSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});