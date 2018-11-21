// Import dependencies
const express = require('express');
const router = express.Router();
const AlbumCtrl = require('../controller/AlbumsController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* Create a user. */
router.post('/', AppCtrl.check, AlbumCtrl.create);

/* Update a user. */
router.put('/:id', AppCtrl.check, AlbumCtrl.update);

/* Delete a user. */
router.delete('/:id', AppCtrl.check, AlbumCtrl.delete);

module.exports = router;