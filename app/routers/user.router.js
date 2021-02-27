let express = require('express');
let router = express.Router();
 
const users = require('../controllers/user.controller.js');

router.put('/process', users.process);

module.exports = router;