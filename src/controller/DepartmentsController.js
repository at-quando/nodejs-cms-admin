var mongoose = require('mongoose');
var Department = require('../models/department');
var db = mongoose.connection;

// exports.show = function(req, res, next) {
//   Video.findOne({
//     _id: req.params.id, 
//     agency_id: res.locals.team._id, 
//     user_id: req.user.id
//   }, 
//   (err, video) => {
//     if (err) res.status(404).send(err);
//     res.status(200).json(video);
//   })
// }

exports.create = function(req, res, next) {
  var name = req.body.name.toLowerCase().split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  let department = new Department({
    name: name,
    agency_id: res.locals.header.team_id,
  });
  department.save((error,department) => {
    if (error) res.status(500).send(error);
    res.status(201).json(department);
  });
}

exports.indexNum = function(req, res, next) {
  db.collection('departments').aggregate([
    {
      $lookup:
        {
          from: 'users',
          localField: '_id',
          foreignField: 'department._id',
          as: 'users'
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          numberOfUsers: { $size: "$users" }
        }
      }
  ], function ( err, departs) {
    if (err) res.status(500).send(err);
    console.log(departs);
    res.status(200).json(departs);
  });
}

exports.index = function(req, res, next) {
  Department.find({agency_id: res.locals.header.team_id}, (err, departs) => {
    if (err) res.status(500).send(error);
    console.log(departs);
    res.status(200).json(departs);
  });
}

// exports.update = function(req, res, next) {
//   Video.findByIdAndUpdate({_id: req.params.id, agency_id: res.locals.header.team_id}, {}, (err, video) => {
//     if (error) res.status(404).send(error);
//     res.status(200).json(video);
//   })
// }

// exports.delete = function(req, res, next) {
//   Video.findOneAndRemove({_id: req.params.id, agency_id: res.locals.header.team_id}, (err, video) => {
//     if (err) res.status(404).send(err);
//     res.status(200).json(video);
//   })
// }