// Import dependencies
const express = require('express');
const router = express.Router();
const VideoCtrl = require('../controller/VideosController');
const UserCtrl = require('../controller/UserController');
const ArticleCtrl = require('../controller/ArticlesController');
const AlbumCtrl = require('../controller/AlbumsController');
const PictureCtrl = require('../controller/PicturesController');
const ContractCtrl = require('../controller/ContractsController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');
const path = require('path');

router.get('/videos', VideoCtrl.index);

router.get('/articles', ArticleCtrl.index);

router.get('/albums', AlbumCtrl.index);

router.get('/videos/:id', VideoCtrl.show);

router.get('/articles/:id', ArticleCtrl.show);

router.get('/contracts/:id', ContractCtrl.show);

router.get('/albums/:id', AlbumCtrl.show);

router.post('/api/users', UserCtrl.create);

router.get('/pictures/:folder/:id', function (req, res, next) {
  console.log(1234,req.params.folder, req.params.id)
  res.sendfile(path.resolve(`./uploads/${req.params.folder}/${req.params.id}`));
}); 

router.get('/pictures', PictureCtrl.indexByType); 

module.exports = router;