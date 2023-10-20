import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Header from '../header/Header';
import Guiahome from '../guia/guiabody/guiahome/Guiahome';
import Guiaexploracion from '../guia/guiabody/guiaexploracion/Guiaexploracion';

function Guialand() {
  return (
    <div className='app-container'>
      <Header />
      <Guiahome />
      <Guiaexploracion />
    </div>
  );
}

export default Guialand;
