var mongoose = require('mongoose');
var User = require('../models/user');
var Department = require('../models/department');
var Agency = require('../models/agency');

// exports.show = function(req, res, next) {
//   User.findOne({_id: req.params.id}, (err, user) => {
//     if (err) res.status(404).send(err);
//     console.log(user)
//     res.status(200).json(user);
//   })
// }

exports.create = function(req, res, next) {
  Department.findOne({ _id: req.body.department}, (err, depart) => {
    if (err) res.status(404).send(err);
    Agency.findOne({_id: res.locals.header.team_id}, (error, agency) => {
      if (error) res.status(404).send(error);
      agency['role'] = 1;
      let user = new User({
        name: req.body.name,
        department: depart,
        email: req.body.email,
        role: 1,
        agencies: agency
      });
      user.save((error, employee) => {
        if (error) res.status(500).send(error);
        res.status(201).json(employee);
      });
    });
  })
}

exports.index = function(req, res, next) {
  User.find(
    { agencies: 
      { $elemMatch : 
         { 
           _id: res.locals.header.team_id
         } 
      } 
  }, (err, users) => {
    if (err) res.status(500).send(error);
    res.status(200).json(users);
  });
}

// exports.update = function(req, res, next) {
//   User.findByIdAndUpdate({_id: req.params.id}, (err, user) => {
//     if (error) res.status(404).send(error);
//     res.status(200).json(user);
//   })
// }

// exports.delete = function(req, res, next) {
//   User.findOneAndRemove({_id: req.params.id}, (err, user) => {
//     if (err) res.status(404).send(err);
//     res.status(200).json(user);
//   })
// }
