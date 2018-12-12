// Import dependencies
const express = require('express');
const router = express.Router();
const CityCtrl = require('../controller/CityController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* GET all users. */
router.get('/', AppCtrl.check, CityCtrl.index);


/* GET all users. */
router.get('/:id', AppCtrl.check, CityCtrl.show);

// /* Create a user. */
router.post('/', AppCtrl.check, CityCtrl.create);

/* Update a user. */
router.put('/:id', AppCtrl.check, CityCtrl.update);

// /* Delete a user. */
// router.delete('/:id', AppCtrl.check, AgencyCtrl.delete);

module.exports = router;