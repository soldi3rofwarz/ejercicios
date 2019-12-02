import Home from './../tema/productos/componentes/casas.js';
<<<<<<< HEAD
import Login from './../tema/home/componentes/login'
=======
import Login from './../tema/home/componentes/login.js';
>>>>>>> 7cf96003ad69f84e2b2c2ed5fcdafa87a8e6b26f
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