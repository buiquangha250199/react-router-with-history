import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './css/tailwind.min.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

console.log(store.getState())

