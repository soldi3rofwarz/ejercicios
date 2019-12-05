import Home from '../tema/home/componentes/home-comp.js';
import Productos from './../tema/productos/componentes/casas.js';
/* import Login from './../tema/home/componentes/login/from'; */
import Inicio from './../tema/home/inicio.js';
const serverRoutes = [
    {
        path: '/',
        component:Home,
        exact: true,
    },
    
  /*    {
        path: '/Login',
        component:Login,
        exact: true,
    }, */

    {
         path: '/casas',
         component:Productos,
         exact: true,
     },

     {
         path: '/inicio',
         component: Inicio,
         exact:true,
     },

];

export default serverRoutes;