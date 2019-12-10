import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

//import Home from './../tema/componentes/home-comp';
import Productos from './../producto/contenedor/Products-Content';
// import Login from './../tema/home/componentes/login/form';
//import Inicio from './../tema/home/inicio';

//importar las rutas de las vista que se podran cargar desde el servidor//
//luego se deben agregar las rutas ne la parte de route//

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Switch>
                {/*<Route exact path='/' component={Home}/>*/}
                <Route exact path='/' component={Productos}/>
                {/* <Route exact path='/form' component={Login}/> */}
                {/*<Route exact path='/inicio' component={Inicio}/>*/}
            </Switch>
        </BrowserRouter>
    );

}

export default AppRoutes;