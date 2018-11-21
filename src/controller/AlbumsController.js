var mongoose = require('mongoose');
var Album = require('../models/album');

exports.show = function(req, res, next) {
  Album.findOne({_id: req.params.id}, (err, album) => {
    if (err) res.status(404).send(err);
    console.log(album)
    res.status(200).json(album);
  })
}

exports.create = function(req, res, next) {
  let album = new Album({
    title: req.body.title,
    desc: req.body.desc,
    pictures: req.body.pictures,
    agency_id: res.locals.header.team_id,
    user_id: req.user.id
  });

  album.save((error, album) => {
    if (error) res.status(500).send(error);
    res.status(201).json(album);
  });
}

exports.index = function(req, res, next) {
  Album.find({}, (err, albums) => {
    if (err) res.status(500).send(error);
    res.status(200).json(albums);
  });
}

exports.update = function(req, res, next) {
  let team = 1234;
  req.user.id
  Album.findByIdAndUpdate({_id: req.params.id, agency_id: res.locals.header.team_id}, req.body, (error, album) => {
    if (error) res.status(404).send(error);
    res.status(200).json(album);
  })
}

exports.delete = function(req, res, next) {
  Album.findOneAndRemove({_id: req.params.id, agency_id: res.locals.header.team_id}, (err, album) => {
    if (err) res.status(404).send(err);
    res.status(200).json(album);
  })
}