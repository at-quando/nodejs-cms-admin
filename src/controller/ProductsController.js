var mongoose = require('mongoose');
var Product = require('../models/product');
var ProductType = require('../models/productType');
var db = mongoose.connection;

exports.show = function(req, res, next) {
  Product.findOne({_id: req.params.id}, (err, cont) => {
    if (err) res.status(404).send(err);
    res.status(200).json(cont);
  })
}

exports.create = function(req, res, next) {
  let obj = req.body;
  obj['agency_id'] = res.locals.header.team_id;
  obj['user_id'] = req.user.id;
  ProductType.findOne({type: parseInt(obj.type), agency_id: obj['agency_id']}, (err, productType) => {
    if (err) res.status(500).send(err);
    obj['type'] = productType;
    let product = new Product(obj);
    console.log(product);
    product.save((error, ctr) => {
      if (error) res.status(500).send(error);
      res.status(201).json(ctr);
    });
  });
}

exports.index = function(req, res, next) {
  Product.find({agency_id: res.locals.header.team_id, 'type._id': mongoose.Types.ObjectId(req.params.type)}, (err, products) => {
    if (err) res.status(500).send(error);
    console.log(products);
    res.status(200).json(products);
  });
}

exports.indexOrder = function(req, res, next) {
  db.collection('products').aggregate([
    { $match: { agency_id: res.locals.header.team_id } },
    { $group: { _id: "$type.name", products: { $push: "$$ROOT" }}}
  ], function ( err, products) {
    if (err) res.status(500).send(err);
    res.status(200).json(products);
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