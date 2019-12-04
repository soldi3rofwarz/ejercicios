import Home from './../tema/home/componentes/body.js';
import Login from './../tema/home/componentes/login.js';
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

<<<<<<< HEAD
   /*  {
        path: '/casas',
        component:casas,
        exact: true,
    }, */
=======
    // {
    //     path: '/casas',
    //     component:casas,
    //     exact: true,
    // },
>>>>>>> 5fdb1046f937dae16692f5e0051f4dacd49814e7

];

export default serverRoutes;