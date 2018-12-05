var mongoose = require('mongoose');
var Todo = require('../models/todo');
var User = require('../models/user');

// exports.show = function(req, res, next) {
//   Article.findOne({_id: req.params.id}, (err, article) => {
//     if (err) res.status(404).send(err);
//     console.log(articles)
//     res.status(200).json(article);
//   })
// }

exports.create = function(req, res, next) {
  let obj = req.body;
  obj['agency_id'] = res.locals.header.team_id;
  User.find({
    _id: {
      $in: req.body.assign
    }
  }, function(err, docs){
    obj['worker'] = docs;
    let todo = new Todo(obj);
    todo.save((error, task) => {
      if (error) res.status(500).send(error);
      res.status(201).json(task);
    });
  });
}

exports.index = function(req, res, next) {
  Todo.find({agency_id: res.locals.header.team_id}, (err, todos) => {
    if (err) res.status(500).send(error);
    res.status(200).json(todos);
  });
}

exports.indexwEms = function(req, res, next) {
  var searchId = null;
  if (req.params.id == req.user.id || res.locals.header.role == 0) {
    searchId = req.params.id
  }
  Todo.find({
    worker: 
      { $elemMatch : 
        { 
          _id: mongoose.Types.ObjectId(searchId)
        } 
      }, 
      agency_id: res.locals.header.team_id
    }, (err, todos) => {
    if (err) res.status(500).send(error);
    res.status(200).json(todos);
  });
}

// exports.update = function(req, res, next) {
//   Article.findByIdAndUpdate({_id: req.params.id, agency_id: res.locals.header.teamId}, {}, (err, article) => {
//     if (error) res.status(404).send(error);
//     res.status(200).json(article);
//   })
// }

// exports.delete = function(req, res, next) {
//   Article.findOneAndRemove({_id: req.params.id, agency_id: res.locals.header.team_id}, (err, article) => {
//     if (err) res.status(404).send(err);
//     res.status(200).json(article);
//   })
// }