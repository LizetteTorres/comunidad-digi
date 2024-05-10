import React from 'react'


export const PrimerComponente = () => {
    return (
        <div className='fomulario'><h3>Mi Cuenta</h3>
        <form action="/my-handling-form-page" method="post"> 
    <input type="search" name="q" placeholder="Ingrese Usuario" />
    <input type="search" name="q" placeholder="Ingrese Contraseña" />
    <h4> </h4>
    <input type="submit" value="Ingresar" />
    <p><a href="#">¿Olvidaste tu Usuario/Contraseña?</a></p> 
     </form>
 </div>    
 )
 }