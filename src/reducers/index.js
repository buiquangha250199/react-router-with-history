const initalState = {
    email : "",
    password : ""
}

const login = (state = initalState, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(action)
            return {
                ...state,
                email: action.email,
                password: action.password
            }
        default: 
            return state
    }
}

export default login