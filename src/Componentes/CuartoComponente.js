import React from 'react'

export const CuartoComponente = () => {
    return (
        <div className='Encuestas'><h3>Encuestas</h3>
        <form action="/my-handling-form-page" method="post">
  <h4>1.-¿Por que los vecinos se mudan?</h4>
  <h4>Select una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio" name="gender" id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio" name="gender" id="No" value="No"   />
  <h4>2.-¿Por que los vecinos  no se mudan?</h4>
  <h4>Select una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio" name="gender" id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio" name="gender" id="No" value="No"   />
  <h4>3.-¿Por que los vecinos  no se quieren?</h4>
  <h4>Select una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio" name="gender" id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio" name="gender" id="No" value="No"   />
<ul>
  <li>
    <input  type="submit" value="Enviar"/> 
    </li>
    </ul>
</form>

    </div>
  
    )
    }