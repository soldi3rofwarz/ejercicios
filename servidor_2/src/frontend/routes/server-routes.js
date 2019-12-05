import Home from '../tema/home/componentes/home.js/index.js';
import Productos from './../tema/productos/componentes/casas.js';
import Login from './../tema/home/componentes/login/from';
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
         path: '/casas',
         component:Productos,
         exact: true,
     },

];

export default serverRoutes;