var mongoose = require('mongoose');
var Article = require('../models/article');

exports.show = function(req, res, next) {
  Article.findOne({_id: req.params.id}, (err, article) => {
    if (err) res.status(404).send(err);
    console.log(articles)
    res.status(200).json(article);
  })
}

exports.create = function(req, res, next) {
  let article = new Article({
    title: req.body.title,
    desc: req.body.desc,
    content: req.body.content,
    type: req.body.type,
    thumbnail: req.body.thumbnail,
    agency_id: res.locals.header.team_id,
    user_id: req.user.id
  });

  article.save((error,article) => {
    if (error) res.status(500).send(error);
    res.status(201).json(article);
  });
}

exports.index = function(req, res, next) {
  Article.find({agency_id: req.query.teamId}, (err, articles) => {
    if (err) res.status(500).send(error);
    res.status(200).json(articles);
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