//import Home from './../tema/componentes/home-comp';
import Productos from './../producto/contenedor/Products-Content';
import Login from './../tema/componentes/login/form'; 
//import Inicio from './../tema/inicio';
import Compimg from './../infproducto/contenedor/image-container';
import registro from './../registro/registro-contenedor/registro-cont';

const serverRoutes = [
    {
        path: '/',
        component: Productos,
        exact: true,
    },
    
     {
        path: '/detalle',
        component:Compimg,
        exact: true,
    },  

     /* {
        path: '/InfoImagen',
         component:KK,
          exact: true,
     }, */

    //  {
    //      path: '/inicio',
    //      component: Inicio,
    //      exact:true,
    //  },



];

export default serverRoutes;