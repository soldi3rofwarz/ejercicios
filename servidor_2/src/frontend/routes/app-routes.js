import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../tema/home/componentes/home.js/index.js';
import Productos from './../tema/productos/componentes/casas.js';
//importar las rutas de las vista que se podran cargar desde el servidor//
//luego se deben agregar las rutas ne la parte de route//

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
<<<<<<< HEAD
                <Route exact path='/casas' component={productos}/>
                <Route exact path='/from' component={Login}/>
=======
                <Route exact path='/casas' component={Productos}/>
>>>>>>> bcc1e06cf3e6a06d880ef20ee384dcecb7871959
            </Switch>
        </BrowserRouter>
    );

}

export default AppRoutes;