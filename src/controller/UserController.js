var mongoose = require('mongoose');
var User = require('../models/user');
var Agency = require('../models/agency');

exports.show = function(req, res, next) {
  User.findOne({_id: req.params.id}, (err, user) => {
    if (err) res.status(404).send(err);
    console.log(user)
    res.status(200).json(user);
  })
}

exports.create = function(req, res, next) {
  let agency = new Agency({
    name: 'Nova Production',
    desc: 'a media, wedding company',
    avatar: '123123',
    default: true
  })

  let user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    agencies: agency
  });

  user.save((error,user) => {
    if (error) res.status(500).send(error);
    res.status(201).json(user);
  });
}

exports.index = function(req, res, next) {
  User.find({}, (err, users) => {
    if (err) res.status(500).send(error);
    res.status(200).json(users);
  });
}

exports.update = function(req, res, next) {
  User.findByIdAndUpdate({_id: req.params.id}, (err, user) => {
    if (error) res.status(404).send(error);
    res.status(200).json(user);
  })
}

exports.delete = function(req, res, next) {
  User.findOneAndRemove({_id: req.params.id}, (err, user) => {
    if (err) res.status(404).send(err);
    res.status(200).json(user);
  })
}

exports.aboutMe = function(req, res, next) {
  console.log(req.user)
  User.findOne({_id: req.user.id}, (err, user) => {
    if (err) res.status(404).send(err);
    res.status(200).json(user);
  })
}