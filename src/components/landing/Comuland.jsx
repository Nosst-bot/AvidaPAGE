import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Comu1 from '../comunidad/comuhome/Comu1';
import Header from '../header/Header';

function Comuland() {
  return (
    <div className='app-container'>
      <Header />
      <Comu1 />
    </div>
  );
}

export default Comuland;
