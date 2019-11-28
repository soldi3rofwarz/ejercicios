<<<<<<< HEAD
import Home from './../tema/home/componentes/body.js';
import Login from './../tema/home/componentes/login'


=======
import Home from './../tema/productos/componentes/casas.js';
>>>>>>> 1d0407f231c8a93eb560af99b7e92b628d5a8004
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
];

export default serverRoutes;