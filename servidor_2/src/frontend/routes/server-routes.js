import Home from './../tema/home/componentes/body.js';
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

    // {
    //     path: '/casas',
    //     component:casas,
    //     exact: true,
    // },

];

export default serverRoutes;