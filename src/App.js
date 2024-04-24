import logo from './assets/img/logo.png';
import './App.css';

import { PrimerComponente } from './Componentes/PimerComponente';
import { SegundoComponente } from './Componentes/SegundoComponente';
import { TercerComponente } from './Componentes/TercerComponente';
import { CuartoComponente } from './Componentes/CuartoComponente';
import { QuintoComponente } from './Componentes/QuintoComponente';
import { ComponentePrincipal } from './Componentes/ComponentePrincipal';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <h1>Comunidad Digital los Robles</h1>
        </p>

        <ComponentePrincipal/> 
        <PrimerComponente/>
        <SegundoComponente/>
        <TercerComponente/>
        <CuartoComponente/>
        <QuintoComponente/>
     
        
        
       
      </header>
    </div>
  );
}

export default App;
