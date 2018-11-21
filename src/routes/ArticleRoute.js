// Import dependencies
const express = require('express');
const router = express.Router();
const ArticleCtrl = require('../controller/ArticlesController');
const AppCtrl = require('../controller/AppController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* Create a user. */
router.post('/', AppCtrl.check, ArticleCtrl.create);

/* Update a user. */
router.put('/:id', AppCtrl.check, ArticleCtrl.update);

/* Delete a user. */
router.delete('/:id', AppCtrl.check, ArticleCtrl.delete);

module.exports = router;