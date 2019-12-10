//import Home from './../tema/componentes/home-comp';
import Productos from './../producto/contenedor/Products-Content';
/* import Login from './../tema/home/componentes/login/from'; */
//import Inicio from './../tema/inicio';
const serverRoutes = [
    {
        path: '/',
        component:Productos,
        exact: true,
    },
    
  /*    {
        path: '/Login',
        component:Login,
        exact: true,
    }, */

    // {
    //      path: '/casas',
    //      component:Productos,
    //      exact: true,
    //  },

    //  {
    //      path: '/inicio',
    //      component: Inicio,
    //      exact:true,
    //  },

];

export default serverRoutes;