import react from 'react';
import ReactDom from 'react-dom';
import Perfil from './perfil/contenedores/perfil-container';
import './index.css';
const App = () => {
    React.useEffect(() => {
        const jssStyles = document.getElementById('jss-server-side');
        if(jssStyles){
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <Perfil/>
    );
}

ReactDOM.hydrate(<app />, document.getElementById('app'));



