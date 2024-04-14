import React from 'react'


export const SegundoComponente = () => {
    return (
        <div className='fomulario'><h3>Formulario de Registro</h3>
        <form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="name">Numero identificación:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="name">Fecha de Nacimiento:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="name">Teléfono móvil/fijo:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Correo electrónico:</label>
      <input type="email" id="mail" name="user_mail" />
    </li>
    <li>
      <label for="msg">Dirección:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
    <li>
      <label for="msg">Mensaje:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
    <li>
    <input  type="submit" value="Enviar"/> 
    </li>
  </ul>
</form>
        </div>
        )
    }