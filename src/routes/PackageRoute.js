// Import dependencies
const express = require('express');
const router = express.Router();
const PackageCtrl = require('../controller/PackagesController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* Show a user. */
// router.get('/:id', VideoCtrl.show);

/* Create a user. */
router.post('/', AppCtrl.check, PackageCtrl.create);

/* Update a user. */
// router.put('/:id', AppCtrl.check, VideoCtrl.update);

/* Delete a user. */
// router.delete('/:id', AppCtrl.check, VideoCtrl.delete);

module.exports = router;