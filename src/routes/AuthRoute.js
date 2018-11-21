const express = require('express');
const router = express.Router();
const validate = require('express-validation');
const Validation = require('../lib/Validation');
const AuthCtrl = require('../controller/AuthController');


/* Create a user. */
router.post('/', AuthCtrl.login);

router.get('/', AuthCtrl.check);

module.exports = router;