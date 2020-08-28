export const login = (email, password) => ({
    type: "LOGIN",
    payload: {
        email: email,
        password: password
    }
})

