import history from "../helpers/history";

export const login = (email, password) => (dispatch, getState) => {
  let data = { email, password };
  fetch("https://rain-land.glitch.me/login", {
    method: "POST",
    data,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "True") {
        history.push('/')
        console.log(getState())
        dispatch({ type: "LOGIN_SUCCEEDED" })
        console.log(getState())

      } else {
        dispatch({ type: "LOGIN_FAILED" })
      }
    });
};

export const logout = (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
