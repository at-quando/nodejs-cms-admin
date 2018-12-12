var mongoose = require('mongoose');
var Package = require('../models/package');

exports.show = function(req, res, next) {
  Article.findOne({_id: req.params.id}, (err, article) => {
    if (err) res.status(404).send(err);
    console.log(articles)
    res.status(200).json(article);
  })
}

exports.create = function(req, res, next) {
  let obj = req.body;
  obj['agency_id'] = res.locals.header.team_id;
  obj['user_id'] = req.user.id;
  let package = new Package(obj);

  package.save((error, pack) => {
    if (error) res.status(500).send(error);
    res.status(201).json(pack);
  });
}

exports.index = function(req, res, next) {
  Package.find({agency_id: res.locals.header.team_id}, (err, packs) => {
    if (err) res.status(500).send(error);
    res.status(200).json(packs);
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