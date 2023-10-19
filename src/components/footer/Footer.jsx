import React from 'react';
import './footer.css';
import logo from './footerimg/Avida.png';
import imgemail from './footerimg/email.png';
import imginsta from './footerimg/instagram.png';
import imgface from './footerimg/facebook.png';

const Footer = () => {
  return (
    <div class='container-footer'>
      <footer class='row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div class='col mb-3'>
          <img src={logo} alt='Logo-Ávida' class='logo' />
        </div>
        <div class='col mb-3'></div>
        <div class='col mb-3'>
          <ul class='nav flex-column'>
            <li class='nav-item mb-2'>
              <a href='#' class='nav-link p-0 text-body-secondary'>
                Inicio
              </a>
            </li>
            <li class='nav-item mb-2'>
              <a href='#' class='nav-link p-0 text-body-secondary'>
                Mapa
              </a>
            </li>
            <li class='nav-item mb-2'>
              <a href='#' class='nav-link p-0 text-body-secondary'>
                Comunidad
              </a>
            </li>
          </ul>
        </div>

        <div class='col mb-3'>
          <ul class='nav flex-column'>
            <li class='nav-item mb-2'>
              <a href='#' class='nav-link p-0 text-body-secondary'>
                Guía
              </a>
            </li>
            <li class='nav-item mb-2'>
              <a href='#' class='nav-link p-0 text-body-secondary'>
                Tienda
              </a>
            </li>
            <li class='nav-item mb-2'>
              <a href='#' class='nav-link p-0 text-body-secondary'>
                Mi cuenta
              </a>
            </li>
          </ul>
        </div>

        <div class='col mb-3'>
          <img src={imgface} alt='Logo-Facebook' class='icono_footer' />
          <img src={imginsta} alt='Logo-Instagram' class='icono_footer' />
          <img src={imgemail} alt='Logo-email' class='icono_footer' />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
