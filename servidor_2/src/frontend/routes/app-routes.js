import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

<<<<<<< HEAD
import Home from '../tema/home/componentes/home';
import Productos from '';
import Login from './../tema/home/componentes/login/from'
=======
import Home from './../tema/componentes/home-comp';
import Productos from './../tema/productos/componentes/casas';
// import Login from './../tema/home/componentes/login/form';
import Inicio from './../tema/home/inicio';

>>>>>>> 56a7c206980684d4fd44c1271f907d8e2c6369a0
//importar las rutas de las vista que se podran cargar desde el servidor//
//luego se deben agregar las rutas ne la parte de route//

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/casas' component={Productos}/>
                {/* <Route exact path='/form' component={Login}/> */}
                <Route exact path='/inicio' component={Inicio}/>
            </Switch>
        </BrowserRouter>
    );

}

export default AppRoutes;