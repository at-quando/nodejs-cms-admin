var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  desc: String,
  content: String,
  type: Number,
  thumbnail: String,
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

var Article = module.exports = mongoose.model('Article', ArticleSchema);

ArticleSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});