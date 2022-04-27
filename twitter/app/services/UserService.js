const User = require("./../models/user")

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user) {
        let userInfoInList = []
        userInfoInList.push(user.id)
        userInfoInList.push(user.username)
        userInfoInList.push(user.name)
        userInfoInList.push(user.bio)
        return userInfoInList
    }
}

module.exports = UserService