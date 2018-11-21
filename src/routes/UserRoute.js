// Import dependencies
const express = require('express');
const router = express.Router();
const UserCtrl = require('../controller/UserController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* GET all users. */
router.get('/', UserCtrl.index);

/* GET all users. */
router.get('/me', UserCtrl.aboutMe);
/* Show a user. */
router.get('/:id', UserCtrl.show);

/* Create a user. */
router.post('/', UserCtrl.create);

/* Update a user. */
router.put('/:id', UserCtrl.update);

/* Delete a user. */
router.delete('/:id', UserCtrl.delete);

module.exports = router;
