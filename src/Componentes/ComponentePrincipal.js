import React from 'react'
let uno = 'PrimerComponente';
let dos = 'SegundoComponente';
let tres = 'TercerComponente';
let cuatro ='CuartoComponente';
let cinco = '/QuintoComponente';

export const ComponentePrincipal = () => {
  return (
    <div className='menuprincipal'><h3>Menú:</h3>
     
    <header>
     <nav>
   <ul>  
  <li><a href='uno'>Mi Cuenta</a></li>
  <li><a href='dos'>Registro</a></li>
  <li><a href='tres'>Pagos </a></li>
  <li><a href='cuatro'>Encuestas</a></li>
  <li><a href='cinco'>Reportes</a></li>
  </ul> 
  </nav> 
  </header>

  </div>
  
)
}

