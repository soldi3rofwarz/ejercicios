import Home from './../tema/productos/componentes/casas.js';
import Login from './../tema/home/componentes/login.js';
import drawer from './../../frontend/drawer/drawer.js';

const serverRoutes = [
    {
        path: '/',
        component:Home,
        exact: true,
    },
    {
        path: '/Login',
        component:Login,
        exact: true,
    },

    {   
        path: '/drawer',
        component: drawer,
        exact: true,
    },
];

export default serverRoutes;