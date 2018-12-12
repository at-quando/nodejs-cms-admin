var mongoose = require('mongoose');
var College = require('../models/college');

exports.show = function(req, res, next) {
  Article.findOne({_id: req.params.id}, (err, article) => {
    if (err) res.status(404).send(err);
    console.log(articles)
    res.status(200).json(article);
  })
}

exports.create = function(req, res, next) {
  let college = new College(req.body);
  college.save((error, colle) => {
    if (error) res.status(500).send(error);
    res.status(201).json(colle);
  });
}

exports.index = function(req, res, next) {
  College.find({agency_id: req.query.teamId}, (err, colleges) => {
    if (err) res.status(500).send(error);
    res.status(200).json(colleges);
  });
}

exports.update = function(req, res, next) {
  Article.findByIdAndUpdate({_id: req.params.id, agency_id: res.locals.header.teamId}, {}, (err, article) => {
    if (error) res.status(404).send(error);
    res.status(200).json(article);
  })
}

exports.delete = function(req, res, next) {
  Article.findOneAndRemove({_id: req.params.id, agency_id: res.locals.header.team_id}, (err, article) => {
    if (err) res.status(404).send(err);
    res.status(200).json(article);
  })
}