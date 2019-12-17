//import Home from './../tema/componentes/home-comp';
import Productos from './../Inicio/contenedor/Products-Content';

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
        path: '/detalle/:productoId',
        component:Compimg,
        exact: true,
    },   

     {
        path: '/registro',
         component:registro,
          exact: true,
     }, 

];

export default serverRoutes;