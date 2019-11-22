import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

//importar las rutas de las vista que se podran cargar desde el servidor//
//luego se deben agregar las rutas ne la parte de route//

import NotFound404 from './../404/componentes/404';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={} /> 
                <Route exact path= '' component={} />
                <Route component={NotFound404} />
            </Switch>
        </BrowserRouter>
    );

}

export default AppRoutes;