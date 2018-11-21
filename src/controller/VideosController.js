var mongoose = require('mongoose');
var Video = require('../models/video');

exports.show = function(req, res, next) {
  Video.findOne({
    _id: req.params.id, 
    agency_id: res.locals.team._id, 
    user_id: req.user.id
  }, 
  (err, video) => {
    if (err) res.status(404).send(err);
    res.status(200).json(video);
  })
}

exports.create = function(req, res, next) {
  let video = new Video({
    title: req.body.title,
    desc: req.body.desc,
    type: req.body.type,
    agency_id: res.locals.header.team_id,
    user_id: req.user.id
  });

  video.save((error,video) => {
    if (error) res.status(500).send(error);
    res.status(201).json(video);
  });
}

exports.index = function(req, res, next) {
  Video.find({}, (err, videos) => {
    if (err) res.status(500).send(error);
    res.status(200).json(videos);
  });
}

exports.update = function(req, res, next) {
  Video.findByIdAndUpdate({_id: req.params.id, agency_id: res.locals.header.team_id}, {}, (err, video) => {
    if (error) res.status(404).send(error);
    res.status(200).json(video);
  })
}

exports.delete = function(req, res, next) {
  Video.findOneAndRemove({_id: req.params.id, agency_id: res.locals.header.team_id}, (err, video) => {
    if (err) res.status(404).send(err);
    res.status(200).json(video);
  })
}