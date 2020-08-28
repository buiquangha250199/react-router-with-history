const initalState = {
    status: 'No login'
}

const login = (state = initalState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCEEDED':
            console.log(action)
            return {
                ...state,
                status: 'Login'
            }
        default: 
            return state
    }
}

export default login