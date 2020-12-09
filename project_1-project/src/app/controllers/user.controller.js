const db = require('../config/db.config.js');
const User = db.users;

// Post User
exports.create = (req, res) => {
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
    }).then(user => {
        res.send(user);
    });
};

// DET all Users
exports.findAll = (req, res) => {
    User.findAll().then(users => {
        // Send all users to Client
        res.send(users);
    });
};

// Find User by Id
exports.findById = (req, res) => {
    User.findById(req.params.userId).then(user => {
        res.send(user);
    })
};

// Update User
exports.update = (req, res) => {
    const id = req.params.userId;
    User.update({ firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age },
        { where: { id: req.params.userId } }
    ).then(() => {
        res.status(200).send("updated successfully an user with id = " + id);
    });
};

// Delete User by Id
exports.delete = (req, res) => {
    const id = req.params.userId;
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully an user with id = ' + id);
    });
};