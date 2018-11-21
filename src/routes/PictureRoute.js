var express = require('express');
var router = express.Router();
var path = require('path');
var PicturesController = require('../controller/PicturesController');
const AppCtrl = require('../controller/AppController');
var multer = require('multer');
var mkdirp = require('mkdirp');
var fs = require('fs');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.exists(`uploads/${file.fieldname}`, function (exists) {
      if (!exists) {
        mkdirp(`uploads/${file.fieldname}`, function (err) {
          if (err) console.error(err)
          else console.log('pow!')
          cb(null, `uploads/${file.fieldname}`)
        });
      } else { 
        cb(null, `uploads/${file.fieldname}`)
      }
    });
   
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

var upload = multer({ storage: storage });

router.post('/',  AppCtrl.check, upload.any(), PicturesController.create);

router.delete('/', PicturesController.destroy);

module.exports = router;
