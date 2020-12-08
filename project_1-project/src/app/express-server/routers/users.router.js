const express = require('express');
const UsersController = require('../controllers/users.controller.js');
const logPath = require('../middlewars/log-path.middlewar.js');

const router = express.Router();
const controller = new UsersController(); 

router
    .get('/', logPath, controller.get)
    .post('/', controller.add)
    .put('/', controller.update)

module.exports = router;