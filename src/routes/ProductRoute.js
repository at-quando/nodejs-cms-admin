const express = require('express');
const router = express.Router();
const ProductCtrl = require('../controller/ProductsController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* Show a user. */
router.get('/info/:id', ProductCtrl.show);

/* Show a user. */
router.get('/:type', AppCtrl.check, ProductCtrl.index);

router.get('/', AppCtrl.check, ProductCtrl.indexOrder);

/* Create a user. */
// router.get('/', AppCtrl.check, ProductTypeCtrl.index);

router.post('/', AppCtrl.check, ProductCtrl.create);

/* Update a user. */
// router.put('/:id', AppCtrl.check, VideoCtrl.update);

/* Delete a user. */
// router.delete('/:id', AppCtrl.check, VideoCtrl.delete);

module.exports = router;