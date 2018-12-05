// Import dependencies
const express = require('express');
const router = express.Router();
const DepartmentCtrl = require('../controller/DepartmentsController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* GET all users. */
router.get('/num', AppCtrl.check, DepartmentCtrl.indexNum);

router.get('/', AppCtrl.check, DepartmentCtrl.index);

// /* Create a user. */
router.post('/', AppCtrl.check, DepartmentCtrl.create);

// /* Update a user. */
// router.put('/:id', AppCtrl.check, AgencyCtrl.update);

// /* Delete a user. */
// router.delete('/:id', AppCtrl.check, AgencyCtrl.delete);

module.exports = router;