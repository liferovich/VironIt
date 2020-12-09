const connection = require('../model/db.js');

class UsersService {
    // usersList=[];
    // getAllUsers = () => {
    //    let usersList;
    //    connection.query('select * from users', function (err, rows){
    //         if (err) {
    //             console.log("Error in select query", + err);
    //         } else {
    //             console.log(rows);
    //             usersList = rows;
    //         }
    //     });
    //     console.log(usersList);
    //     // return usersList;
    // }
    // addUser = (user) => {
    //     this.usersList.push(user);
    //     return this.usersList;
    // }
    // updateUsers = (usersList) => {
    //     this.usersList = usersList;
    //     return this.usersList;
    // }
}
module.exports = UsersService;