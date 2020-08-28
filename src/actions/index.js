export const login = (email, password) => (dispatch, getState) => {
    let data = { email, password }
    console.log(1111111, data)
    fetch('https://rain-land.glitch.me/login', {
        method: 'POST',
        data
    }).then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.status === "True") {
                dispatch({ type: "LOGIN_SUCCEEDED" })
            } else {
                dispatch({ type: "LOGIN_FAILED" })
            }
        })
} 
