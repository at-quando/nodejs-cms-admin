var mongoose = require('mongoose');
var Contract = require('../models/contract');
var ProductType = require('../models/productType');

exports.show = function(req, res, next) {
  ProductType.findOne({_id: req.params.id}, (err, cont) => {
    if (err) res.status(404).send(err);
    res.status(200).json(cont);
  })
}

exports.create = function(req, res, next) {
  let obj = req.body;
  obj['agency_id'] = res.locals.header.team_id;
  let typeProduct = new ProductType(obj);
  typeProduct.save((error, ctr) => {
    if (error) res.status(500).send(error);
    res.status(201).json(ctr);
  });
}

exports.index = function(req, res, next) {
  ProductType.find({agency_id: res.locals.header.team_id}, (err, types) => {
    if (err) res.status(500).send(error);
    res.status(200).json(types);
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