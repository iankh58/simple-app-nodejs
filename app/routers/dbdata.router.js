let express = require('express');
let router = express.Router();
 
const dbData = require('../controllers/dbdata.controller.js');

router.post('/:key', dbData.process);

module.exports = router;