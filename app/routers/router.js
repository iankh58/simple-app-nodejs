let express = require('express');
let router = express.Router();
 
const users = require('../controllers/controller.js');

router.get('/api/users/all', users.retrieveAllUsers);
router.put('/api/users/update/:id', users.updateById);

module.exports = router;