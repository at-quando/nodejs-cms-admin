var mongoose = require('mongoose');
var City = require('../models/city');

exports.show = function(req, res, next) {
  City.findOne({_id: req.params.id}, (err, city) => {
    if (err) res.status(404).send(err);
    res.status(200).json(city);
  })
}

exports.create = function(req, res, next) {
  let city = new City(req.body);
  city.save((error, cit) => {
    if (error) res.status(500).send(error);
    res.status(201).json(cit);
  });
}

exports.index = function(req, res, next) {
  City.find({}, (err, cities) => {
    if (err) res.status(500).send(error);
    res.status(200).json(cities);
  });
}

exports.update = function(req, res, next) {
  City.findByIdAndUpdate({_id: req.params.id}, req.body, (err, cities) => {
    if (err) res.status(404).send(err);
    res.status(200).json(cities);
  })
}

exports.delete = function(req, res, next) {
  Article.findOneAndRemove({_id: req.params.id, agency_id: res.locals.header.team_id}, (err, article) => {
    if (err) res.status(404).send(err);
    res.status(200).json(article);
  })
}