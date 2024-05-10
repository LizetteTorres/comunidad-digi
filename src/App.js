import logo from './assets/img/logo.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendar} from "@fortawesome/free-solid-svg-icons";

import { PrimerComponente } from './Componentes/PimerComponente';
import { SegundoComponente } from './Componentes/SegundoComponente';
import { TercerComponente } from './Componentes/TercerComponente';
import { CuartoComponente } from './Componentes/CuartoComponente';
import { QuintoComponente } from './Componentes/QuintoComponente';
import { ComponentePrincipal } from './Componentes/ComponentePrincipal';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /> 
        <p>
         <h2>Comunidad Digital los Robles</h2>
        </p>
          
      <header className="App-header">
      
      <h4>Notificaciones<FontAwesomeIcon icon={faBell} style={{fontSize:"1.5em", color:"#26196d", alignContent:"left"}}/></h4> 
      <h4>Calendario<FontAwesomeIcon icon={faCalendar} style={{fontSize:"1.5em", color:"#26196d", }}/></h4>
        

        <ComponentePrincipal/> 
        <PrimerComponente/>
        <SegundoComponente/>
        <TercerComponente/>
        <CuartoComponente/>
        <QuintoComponente/>
     
        <article>
  <h2>Redes Scociales: </h2>   
 <FontAwesomeIcon icon={faFacebook} style={{fontSize:"2em", color:"white", alignContent:"relative", whiteSpace:"50",}}/> 
  <FontAwesomeIcon icon={faTwitter} style={{fontSize:"2em", color:"white", alignContent:"relative"}}/> 
  <FontAwesomeIcon icon={faInstagram} style={{fontSize:"2em", color:"white", alignContent:"relative"}}/>     
    </article>  
    <div>
<label for="firstname"> Correo electrónico:</label>
<input type="text" name="firstname" id="firstname"/> <br></br> 
<input type="checkbox" name="subscribe" id="subscribe"/>
<label for="subscribe">Subscribe to newsletter</label>
</div>    
       
      </header>
    </div>
  );
}

export default App;
