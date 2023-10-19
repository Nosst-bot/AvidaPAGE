import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import '../header/header.css';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/img/Avida.png';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' className='bg-green fixed-top'>
        <Container>
          <Navbar.Brand href='#home'>
            <img src={logoImage} alt='Logo' style={{ maxWidth: '100px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto align-items-center'>
              <Nav.Link as={Link} to='/'>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                Comunidad
              </Nav.Link>
              <Nav.Link as={Link} to='/mapa'>
                Mapa
              </Nav.Link>
              <Nav.Link as={Link} to='/guía'>
                Guía
              </Nav.Link>
              <Nav.Link as={Link} to='/tienda'>
                Tienda
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/login'>
                Mi Cuenta
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
