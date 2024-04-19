import logo from './assets/img/logo.png';
import './App.css';
import { PrimerComponente } from './Componentes/PrimerComponente';
import { SegundoComponente } from './Componentes/SegundoComponente';
import { TercerComponente } from './Componentes/TercerComponente';
import { CuartoComponente } from './Componentes/CuartoComponente';
import { QuintoComponente } from './Componentes/QuintoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <h1>Comunidad Digital los Robles</h1>
        </p>
        <PrimerComponente></PrimerComponente>
        <SegundoComponente></SegundoComponente>
        <TercerComponente></TercerComponente>
        <CuartoComponente></CuartoComponente>
        <QuintoComponente></QuintoComponente>
      </header>
    </div>
  );
}

export default App;
