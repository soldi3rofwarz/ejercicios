import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

<<<<<<< HEAD
import Home from './../../frontend/tema/home/componentes/body.js';
import productos from './../tema/productos/componentes/casas.js';

=======
import Home from './../tema/home/componentes/body.js';
>>>>>>> 1adf968106aa3f435aab44be9e955171a80e7e8a
//importar las rutas de las vista que se podran cargar desde el servidor//
//luego se deben agregar las rutas ne la parte de route//

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/casas' component={productos}/>
            </Switch>
        </BrowserRouter>
    );

}

export default AppRoutes;