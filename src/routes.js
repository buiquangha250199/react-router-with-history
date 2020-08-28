import App from './App';
import Login from './containers/loginForm';
import Home from './components/home';

const routes = [
    {
        component: App,
        routes: [
            {
                path: "/",
                exact: true,
                component: Login
            },
            {
                path: "/home",
                exact: true,
                component: Home
            },

        ]
    }
]


export default routes;
