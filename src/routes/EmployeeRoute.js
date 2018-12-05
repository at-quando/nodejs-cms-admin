// Import dependencies
const express = require('express');
const router = express.Router();
const EmployeeCtrl = require('../controller/EmployeesController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* GET all users. */
router.get('/', AppCtrl.check, EmployeeCtrl.index);

// /* Create a user. */
router.post('/', AppCtrl.check, EmployeeCtrl.create);

// /* Update a user. */
// router.put('/:id', AppCtrl.check, AgencyCtrl.update);

// /* Delete a user. */
// router.delete('/:id', AppCtrl.check, AgencyCtrl.delete);

module.exports = router;