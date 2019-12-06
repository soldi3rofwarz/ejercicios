import Home from './../tema/componentes/home-comp';
import Productos from './../tema/componentes/casas';
/* import Login from './../tema/home/componentes/login/from'; */
import Inicio from './../tema/inicio';
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