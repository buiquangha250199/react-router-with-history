import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './css/tailwind.min.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import rootReducer from './reducers'
import routes from './routes'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

