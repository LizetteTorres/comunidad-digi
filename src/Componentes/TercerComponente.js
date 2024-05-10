import React from 'react'

export const TercerComponente = () => {
    return (
        <div className='fomulario'><h3>Pago de Cuotas</h3>
        <form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Nombre del residente:</label>
      <input type="text" id="name" name="user_name"/>
    </li>
    <li>
      <label for="name">Tipo de Pago:</label>
      <input type="text" id="name" name="user_name"/>
    </li>
    <li>
      <label for="name">Monto:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="name">Método de Pago:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
    <input  type="submit" value="Enviar"/> 
    </li>
  </ul>
</form>
    </div>
        )
    }