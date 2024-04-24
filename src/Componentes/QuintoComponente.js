import React from 'react'


export const QuintoComponente = () => {
    return (
        <div className='ReporteProblemas'><h3> Reporte de Problema</h3>
        <form action="/my-handling-form-page" method="post">

        <ul>
    <li>
      <label for="name">Descripción del Problema:</label>
      <textarea id="problemDescription" name="user_name" rows="4"></textarea>
    </li>
    <li>
    <input  type="submit" value="Enviar"/> 
    </li>
  </ul>
</form>
<div>
 
</div>


    </div>
    
    )
    }