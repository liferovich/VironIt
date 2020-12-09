const express = require('express');
const UsersController = require('../controllers/users.controller.js');
const logPath = require('../middlewars/log-path.middlewar.js');

const router = express.Router();
const controller = new UsersController();

router
    .get('/user', logPath, controller.getById)
    .get('/', logPath, controller.getAll)
    .post('/', controller.add)
    .put('/', controller.update)
    .delete('/', controller.delete)

module.exports = router;