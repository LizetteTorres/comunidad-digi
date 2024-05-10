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
      <label for="name">Número identificacion:</label>
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
    <p>Agregar documento:  </p>
     <input className="botons" type="submit" value="Seleccionar archivo"/>
    </li>
    <li>
    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
     <input className="botons" type="submit" value="Registrar"/>
     <p><a href="Actividad Integradora\carrito.html">¿Ya tengo Cuenta?</a></p> 
    </li>
  </ul>
</form>
        </div>
        )
    }