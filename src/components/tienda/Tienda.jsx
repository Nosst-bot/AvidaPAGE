import React from 'react';
import { Link } from 'react-router-dom';
import './tienda.css';

import tiendaP from '../../assets/img/tienda.png';

function Tienda() {
  return (
    <div className='tienda-container'>
      <div className='imagen-y-botones'>
        <img
          src={tiendaP}
          alt='Imagen de la tienda'
          className='imagen-tienda'
        />
        <Link to='/Tienda'>
          <button className='boton-centrado'>Tienda</button>
        </Link>
      </div>
      <div className='section-divider'></div>
    </div>
  );
}

export default Tienda;
