import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Header from '../../components/header/Header';
import Home from '../../components/home/Home';
import Comunidad from '../../components/comunidad/Comunidad';
import Conecta from '../../components/conecta/Conecta';
import Crearuta from '../../components/crearuta/Crearuta';
import Rutaje from '../../components/rutaje/Rutaje';
import Guia from '../../components/guia/Guia';
import Tienda from '../../components/tienda/Tienda';
import Footer from '../footer/Footer';

function Landing() {
  return (
    <div className='app-container'>
      <Header rol={"usuario"}/>
      <Home />
      <Conecta />
      <Crearuta />
      <Rutaje />
      <Guia />
      <Comunidad />
      <Tienda />
      <Footer />
    </div>
  );
}

export default Landing;
