class UsersService {
    usersList=[
        {
            name: "Nataly"
        },
        {
            name: "Dima"
        }
    ]
    getAllUsers =() => {
        return this.usersList;
    }
    addUser = (user) => {
        this.usersList.push(user);
        return this.usersList;
    }
    updateUsers = (usersList) => {
        this.usersList = usersList;
        return this.usersList;
    }
}
module.exports = UsersService;