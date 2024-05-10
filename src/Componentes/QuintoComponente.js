import React from 'react'


export const QuintoComponente = () => {
    return (
        <div className='ReporteProblemas'><h3> Reporte de Problema</h3>
        <form action="/my-handling-form-page" method="post">

    <ul>
    <li>
    <h4>Seleccione una opción:</h4>
  <label For="si">Mantenimiento:</label>
  <input type="radio"  id="Si" value="Si" />
  <label For="no"> Seguridad: </label>
  <input type="radio"  id="Si" value="SI"  />
  <label For="no"> Limpieza:</label>
  <input type="radio"  id="Si" value="Si"  />
  <label For="no"> Ruidos:</label>
  <input type="radio"  id="Si" value="Si"  />
  <label For="no"> Recolección:</label>
  <input type="radio"  id="Si" value="Si"  />
  <label For="no"> Quejas:</label> 
  <input type="radio"  id="Si" value="Si" /> 
  <h4></h4>
  <label for="name">Descripción del Problema:</label>
  <textarea id="problemDescription" name="user_name" rows="4"></textarea>
  </li>
  <li>
  <input  type="submit" value="Enviar"/> 
  </li>
  </ul>
</form>
    </div>
    
    )
    }