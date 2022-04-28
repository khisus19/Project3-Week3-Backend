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

    static updateUserUsername(user, newUserName) {
        return user.username = newUserName
    }

    static getAllUsernames() {
        const user1 = UserService.create(1, "carlogilmar1", "Carlo")
        const user2 = UserService.create(1, "carlogilmar2", "Carlo")
        const user3 = UserService.create(1, "carlogilmar3", "Carlo")
        const usernames = []
        usernames.push(user1.username)
        usernames.push(user2.username)
        usernames.push(user3.username)
        return usernames
    }
}

module.exports = UserService