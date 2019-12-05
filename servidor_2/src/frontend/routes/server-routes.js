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
<<<<<<< HEAD
    },  
=======
    },
>>>>>>> bcc1e06cf3e6a06d880ef20ee384dcecb7871959

    {
         path: '/casas',
         component:Productos,
         exact: true,
     },

];

export default serverRoutes;