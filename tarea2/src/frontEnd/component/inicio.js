import React from 'react';
import Listado from './lista';


const Inicio = (props) => {

    const { imagenes, color, cambiarColor } = props;
         
    
    const [counter, setCounter] = React.useState(0);
    return (
        <div>
            <Listado
                color={color}
                cambiarColor={cambiarColor}
                imagenes={imagenes}
            />
            <h1>My Counter</h1>
            <Counter counter={counter} />
            <button type="button" onClick={() => setCounter(counter + 1)} >
                Increment
      </button>
        </div>
    );
    
};
export const Counter = ({ counter }) => (
    <div>
        <p>{counter}</p>
    </div>
    )
export default Inicio;