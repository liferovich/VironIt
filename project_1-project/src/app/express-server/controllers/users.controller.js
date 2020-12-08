const UsersService = require('../services/users.service.js');

class UsersController {
    service= new UsersService();
    constructor(){
        this.get = this.get.bind(this);
    }
    get(req, res, next){
        res
        .status(200)
        .send(this.service.getUsers());
    }
    add = (req, res, next) => {
        res
        .status(201)
        .send(this.service.addUser(req.body));
    }
    update = (req, res, next) => {
        res
        .status(201)
        .send(this.service.updateUsers(req.body));
    }
}
module.exports = UsersController;