var mongoose = require('mongoose');
var Picture = require('../models/picture');
var User = require('../models/user');

exports.create = function(req, res, next) {
  const link = req.files.map(x => `${x.fieldname}/${x.filename}`)

  let pic = new Picture({
    title: req.body.title,
    desc: req.body.desc,
    link: link,
    type: req.body.type,
    agency_id: res.locals.header.team_id,
    album_id: req.body.albumId,
    article_id: req.body.articleId
  });

  pic.save((error, picture) => {
    if (error) res.status(500).send(error);
    res.status(201).json(picture);
  });
}

exports.indexByType = function(req, res, next) {
  Picture.find({type: { $ne: 0 }, agency_id: req.query.agencyId}, (err, pictures) => {
    if (err) res.status(404).send(err);
    res.status(200).json(pictures);
  })
}

exports.destroy = function(req, res, next) {
  const link = req.files.map(x => `${x.fieldname}/${x.filename}`)
  res.send({
    link
  });
}

exports.uploadAvatar = function(req, res, next) {
  const link = req.files.map(x => `${x.fieldname}/${x.filename}`)
  console.log(link, req.files)
  User.findByIdAndUpdate(req.user.id, { $set:{avatar: link[0]}}, { new: true }, (err, userUpdate) => {
    if (err) res.status(404).send(err);
    console.log(123, userUpdate.avatar)
    res.status(200).json(userUpdate);
  })
}