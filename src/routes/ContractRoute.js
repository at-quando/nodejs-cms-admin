// Import dependencies
const express = require('express');
const router = express.Router();
const ContractCtrl = require('../controller/ContractsController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* GET all users. */
router.get('/', AppCtrl.check, ContractCtrl.index);


/* GET all users. */
router.get('/:id', AppCtrl.check, ContractCtrl.show);

// /* Create a user. */
router.post('/', AppCtrl.check, ContractCtrl.create);

/* Update a user. */
router.put('/:id', AppCtrl.check,  ContractCtrl.update);

// /* Delete a user. */
// router.delete('/:id', AppCtrl.check, AgencyCtrl.delete);

module.exports = router;