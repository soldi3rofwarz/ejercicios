import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../tema/home/componentes/home';
import Productos from './../tema/productos/componentes/casas.js';
import Login from './../tema/home/componentes/login/from'
//importar las rutas de las vista que se podran cargar desde el servidor//
//luego se deben agregar las rutas ne la parte de route//

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/casas' component={Productos}/>
                <Route exact path='/from' component={Login}/>
            </Switch>
        </BrowserRouter>
    );

}

export default AppRoutes;