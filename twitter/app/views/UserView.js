const User = require("./../models/user")

class UserView {
    static createUser(payload){
        const result = {payload: "payload no existe"}
        
        if (payload === null) {
            return result.payload
        }
    }
}

module.export = UserView