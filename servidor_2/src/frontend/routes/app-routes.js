import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

//import Home from './../tema/componentes/home-comp';
import Productos from './../Inicio/contenedor/Products-Content';
import Login from './../tema/componentes/login/form';
//import Inicio from './../tema/home/inicio';
import Compimg from './../infproducto/contenedor/image-container';
import registro from './../registro/registro-contenedor/registro-cont';

//importar las rutas de las vista que se podran cargar desde el servidor//
//luego se deben agregar las rutas ne la parte de route//

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Switch>
                {/*<Route exact path='/' component={Home}/>*/}
                <Route exact path='/' component={Productos}/>
                <Route exact path='/Detalle/:productoId' component={Compimg}/>
                {/*<Route exact path='/inicio' component={Inicio}/>*/}
                {<Route exact path='/registro' component={registro}/>}
            </Switch>
        </BrowserRouter>
    );

}

export default AppRoutes;