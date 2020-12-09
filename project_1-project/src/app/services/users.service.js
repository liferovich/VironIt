const connection = require('../model/db.js');

class UsersService {
    
    // constructor(){
    //     this.usersList = [];
    // }
    // getAllUsers = async () => {
    //    await connection.query('select * from users', function (err, rows){
    //         if (err) {
    //             console.log("Error in select query", + err);
    //         } else {
    //             this.usersList=JSON.parse(JSON.stringify(rows));
    //             return this.usersList;               
    //         }
    //     });
    //     return this.usersList;
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