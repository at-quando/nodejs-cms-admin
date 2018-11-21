var mongoose = require('mongoose');
var Contract = require('../models/contract');
var Package = require('../models/package');

exports.show = function(req, res, next) {
  Contract.findOne({_id: req.params.id}, (err, cont) => {
    if (err) res.status(404).send(err);
    res.status(200).json(cont);
  })
}

exports.create = function(req, res, next) {
  let obj = req.body;
  console.log(req.body);
  obj['agency_id'] = res.locals.header.team_id;
  obj['user_id'] = req.user.id;
  Package.find({'_id': { $in: obj.packages}}, (err, packs) => {
    if (err) res.status(500).send(err);
    obj.packages = packs
    let contract = new Contract(obj);
    console.log(contract);
    contract.save((error, ctr) => {
      if (error) res.status(500).send(error);
      res.status(201).json(ctr);
    });
  });
}

exports.index = function(req, res, next) {
  Contract.find({agency_id: res.locals.header.team_id}, (err, contracts) => {
    if (err) res.status(500).send(error);
    res.status(200).json(contracts);
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