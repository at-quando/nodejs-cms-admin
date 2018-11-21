var mongoose = require('mongoose');
var Agency = require('../models/agency');

exports.index = function(req, res, next) {
  Agency.find({}, (err, agencies) => {
    if (err) res.status(500).send(error);
    res.status(200).json(agencies);
  });
}