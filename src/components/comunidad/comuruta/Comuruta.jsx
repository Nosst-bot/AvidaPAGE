import React from 'react';
import chercan from '/src/assets/img/chercan.png';
import gorrion from '/src/assets/img/gorrion.png';
import colibri from '/src/assets/img/colibri.png';
import chilco from '/src/assets/img/chilco.jpg';
import florcita from '/src/assets/img/ortiga.png';

function Comuruta() {
  return (
    <div>
      {' '}
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src={chercan}
              alt='Descripción de la imagen 1'
              className='img-fluid'
            />
          </div>
          <div className='col-md-4'>
            <img
              src={gorrion}
              alt='Descripción de la imagen 2'
              className='img-fluid'
            />
          </div>
          <div className='col-md-4'>
            <img
              src={chilco}
              alt='Descripción de la imagen 3'
              className='img-fluid'
            />
          </div>
          <div className='col-md-4'>
            <img
              src={florcita}
              alt='Descripción de la imagen 3'
              className='img-fluid'
            />
          </div>
          <div className='col-md-4'>
            <img
              src={colibri}
              alt='Descripción de la imagen 3'
              className='img-fluid'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'></div>
        </div>
        <div className='section-divider'></div>
      </div>
    </div>
  );
}

export default Comuruta;
