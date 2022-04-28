const UserView = require('./../../app/views/UserView')

describe("Tests for UserView", () => {

    // Requerimiento 1:
    test("Return an error object when try to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })

    // Requerimiento 2:
    test("Return an error object whe try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
})