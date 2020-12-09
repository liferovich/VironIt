// const UsersService = require('../services/users.service.js');
const connection = require('../model/db.js');

class UsersController {
    // service= new UsersService();
    getAll = (req, res, next) => {
        connection.query('select * from users', function (err, results){
            if (err) {
                console.log("Error in query getAll", + err);
            } else {
                res
                .status(200)
                .send(results);
            }
        });
        // res
        // .status(200)
        // .send(this.service.getAllUsers());
    }
    getById = (req, res, next) => {
        connection.query('select * from users where id='+req.body.id, function (err, results){
            if (err) {
                console.log("Error in query getAll", + err);
            } else {
                console.log(results);
                res
                .status(200)
                .send(results);

            }
        });
        // res
        // .status(200)
        // .send(this.service.getAllUsers());
    }
    add = (req, res, next) => {
        let data = {id: req.body.id, name: req.body.name};
        connection.query('insert into users set ?', data, function (err, results){
            if (err) {
                console.log("Error in query add", + err);
            } else {
                res
                .status(201)
                .send("Пользователь добавлен");
            }
        });
    //     res
    //     .status(201)
    //     .send(this.service.addUser(req.body));
    }
    update = (req, res, next) => {
        let data = {id: req.body.id, name: req.body.name};
        connection.query('update users set name="'+req.body.name+'" where id='+req.body.id, function (err, results){
            if (err) {
                console.log("Error in query update", + err);
            } else {
                res
                .status(201)
                .send("Пользователь изменён");
            }
        });
        // res
        // .status(201)
        // .send(this.service.updateUsers(req.body));
    }
    delete = (req, res, next) => {
        let data = {id: req.body.id, name: req.body.name};
        connection.query('delete from users where id='+req.body.id, function (err, results){
            if (err) {
                console.log("Error in query update", + err);
            } else {
                res
                .status(201)
                .send("Пользователь удалён");
            }
        });
        // res
        // .status(201)
        // .send(this.service.updateUsers(req.body));
    }
}
module.exports = UsersController;