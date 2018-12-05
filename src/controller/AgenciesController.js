var mongoose = require('mongoose');
var Agency = require('../models/agency');

exports.index = function(req, res, next) {
  Agency.find({}, (err, agencies) => {
    if (err) res.status(500).send(error);
    res.status(200).json(agencies);
  });
}

exports.create = function(req, res, next) {
  let agency = new Agency({
    name: 'Nova Production',
    desc: 'a media, wedding company',
    avatar: '123123'
  })

  agency.save((error,agen) => {
    if (error) res.status(500).send(error);
      res.status(201).json(agen);
    });
}