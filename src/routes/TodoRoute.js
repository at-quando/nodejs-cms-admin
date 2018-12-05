// Import dependencies
const express = require('express');
const router = express.Router();
const TodoCtrl = require('../controller/TodosController');
const AppCtrl = require('../controller/AppController');

/* GET all users. */
router.get('/', AppCtrl.check, TodoCtrl.index);

router.get('/ems/:id', AppCtrl.check, TodoCtrl.indexwEms);

// /* Create a user. */
router.post('/', AppCtrl.check, TodoCtrl.create);

// /* Update a user. */
// router.put('/:id', AppCtrl.check, AgencyCtrl.update);

// /* Delete a user. */
// router.delete('/:id', AppCtrl.check, AgencyCtrl.delete);

module.exports = router;