const initalState = {
    status: 'No login'
}

const login = (state = initalState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCEEDED':
            console.log(action)
            return {
                ...state,
                status: 'Login ok!'
            }
        case 'LOGOUT':
            console.log(action)
            return {
                ...state,
                status: 'Logout!'
            }
        default: 
            return state
    }
}

export default login