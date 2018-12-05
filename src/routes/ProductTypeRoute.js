const express = require('express');
const router = express.Router();
const ProductTypeCtrl = require('../controller/ProductTypesController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* Show a user. */
router.get('/:id', ProductTypeCtrl.show);

/* Create a user. */
router.get('/', AppCtrl.check, ProductTypeCtrl.index);

router.post('/', AppCtrl.check, ProductTypeCtrl.create);

/* Update a user. */
// router.put('/:id', AppCtrl.check, VideoCtrl.update);

/* Delete a user. */
// router.delete('/:id', AppCtrl.check, VideoCtrl.delete);

module.exports = router;