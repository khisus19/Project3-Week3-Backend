const UserService = require('./../services/UserService')

class UserView{

    static createUser(payload){
        if(payload === null) {
            const result = {error: "El payload no existe"}
            return result
        } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
            return UserService.create(payload.id, payload.username, payload.name);
        } else{
            return {error: "Error, las propiedades del payload necesitan tener un valor valido"};
        }
    }
}

module.exports = UserView

