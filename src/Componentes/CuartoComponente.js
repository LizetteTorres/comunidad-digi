import React from 'react'

export const CuartoComponente = () => {
    return (
        <div className='Encuestas'><h3>Encuestas</h3>
        <form action="/my-handling-form-page" method="post">
  <h4>1.-¿En general, está satisfecho con la vida en su comunidad? </h4>
  <h4>Seleccione una opción:</h4>
  <label For="si"> Si </label>
  <input type="radio"  id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio"  id="No" value="No"   />
  <h4>2.-¿Se siente seguro viviendo en esta comunidad?</h4>
  <h4>Selecccione una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio"  id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio"  id="No" value="No"   />
  <h4>3.-¿Cree que su comunidad es un lugar limpio y bien mantenido? </h4>
  <h4>Seleccione una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio"  id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio" id="No" value="No"   />
  <h4>4.-¿Los vecinos en general son amigables y serviciales? </h4>
  <h4>Seleccione una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio" id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio"  id="No" value="No"   />
  <h4>5.-¿Las reglas y normas de la comunidad son justas y se aplican de manera consistente? </h4>
  <h4>Seleccione una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio"  id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio"  id="No" value="No"   />
  <h4>6.-¿La comunicación con la administración de la comunidad es clara y efectiva?  </h4>
  <h4>Seleccione una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio" id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio" id="No" value="No"   />
  <h4>7.-¿Se siente escuchado y valorado por la administración de la comunidad?  </h4>
  <h4>Seleccione una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio"  id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio"  id="No" value="No"   />
  <h4>8.-¿Recomendaría esta comunidad a otros como un buen lugar para vivir?  </h4>
  <h4>Seleccione una opción:</h4>
  <label For="si"> Si</label>
  <input type="radio"  id="Si" value="Si"  />
  <label For="no"> No</label>
  <input type="radio"  id="No" value="No"   />
<ul></ul>
<ul>
  <li>
    <input  type="submit" value="Enviar"/> 
    </li>
    </ul>
    <p><a href="#">Consultar resultados de Encuestas</a></p> 
</form>

    </div>
  
    )
    }