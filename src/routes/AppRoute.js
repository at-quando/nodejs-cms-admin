// Import dependencies
const express = require('express');
const router = express.Router();
const AppCtrl = require('../controller/AppController');

router.post('/', AppCtrl.check);

module.exports = router;