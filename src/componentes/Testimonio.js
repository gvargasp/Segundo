import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/testimonio-robot1.jpg')}
        alt='Foto de Robot1' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Robot1 en Iquique</p>
        <p className='cargo-testimonio'>Analista</p>
        <p className='texto-testimonio'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, explicabo facere eligendi odit nobis accusamus rerum, molestias culpa ut delectus adipisci ex consequuntur quidem. Reiciendis autem quae maxime enim cumque.</p>
      </div>
    </div>
  );
}

export default Testimonio;