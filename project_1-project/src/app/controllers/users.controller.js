const UsersService = require('../services/users.service.js');
const connection = require('../model/db.js');

class UsersController {
    service= new UsersService();
    constructor(){
        this.get = this.get.bind(this);
    }
    getAll(req, res, next){
        query = connection.query('select * from users', function (err, rows){
            if (err) {
                console.log("Error in select query", +err);
            } else {
                req.send(rows);
            }
        });
        res
        .status(200)
        .send(this.service.getAllUsers());
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