import Home from './../tema/productos/componentes/casas.js';
import Login from './../tema/home/componentes/login'
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