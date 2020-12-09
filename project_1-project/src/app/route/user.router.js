const users = require('../controllers/user.controller.js');

module.exports = function(app) {

    // add
    app.post('/api/users', users.create);
 
    // getALL
    app.get('/api/users', users.findAll);
 
    // Get by Id
    app.get('/api/users/:userId', users.findById);
 
    // Update by Id
    app.put('/api/users/:userId', users.update);
 
    // Delete by Id
    app.delete('/api/users/:userId', users.delete);
}