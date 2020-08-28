const initalState = {
    status: 'No login'
}

const login = (state = initalState, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(action)
            return {
                ...state,
                status: 'Try to Login'
            }
        default: 
            return state
    }
}

export default login