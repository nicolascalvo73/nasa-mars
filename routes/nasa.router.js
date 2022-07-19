const express = require('express');
const router = express.Router();
const { getApod } = require('../controllers/nasa/apod.controller');
const { getMars } = require('../controllers/nasa/mars.controller');

/* NASA endpoints*/
router.get('/apod', getApod);
router.get('/mars/:rover/', getMars);


module.exports = router;
