import Home from './../tema/home/componentes/body.js';
import Drawer from './../drawer/drawer.js';
const serverRoutes = [
    {
        path: '/',
        component:Home,
        exact: true,

        path:'/drawer',
        component:Drawer,
        exact: true,

    },
];

export default serverRoutes;