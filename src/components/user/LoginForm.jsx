import React, { useState } from 'react';
import './loginform.css';

export default function LoginForm() {
  const [selectedOption, setSelectedOption] = useState(null); // Inicializado en null

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='loginform-container'>
      <div className='loginform-row'>
        <div className='loginform-col-md-6'>
          <div className='text-center'>
            <h1>
              {selectedOption === 'registro' ? 'Registro' : 'Iniciar Sesión'}
            </h1>
          </div>
          <div className='loginform-col-md-6-options loginform-custom-option'>
            <ul>
              <li onClick={() => handleOptionChange('registro')}>
                <button
                  type='button'
                  className='loginform-custom-btn loginform-custom-btn-registro'
                >
                  Registro
                </button>
              </li>
              <li onClick={() => handleOptionChange('inicioSesion')}>
                <button
                  type='button'
                  className='loginform-custom-btn loginform-custom-btn-inicio-sesion'
                >
                  Iniciar Sesión
                </button>
              </li>
            </ul>
          </div>
          {selectedOption && (
            <form method='post' action='index.html'>
              <div className='mb-3'>
                {selectedOption === 'registro' && (
                  <>
                    <label htmlFor='name' className='form-label'>
                      Nombre
                    </label>
                    <input type='text' className='custom-input' id='name' />
                  </>
                )}
                <label htmlFor='email' className='form-label'>
                  Correo Electrónico
                </label>
                <input type='email' className='custom-input' id='email' />
              </div>
              {selectedOption === 'registro' && (
                <div className='mb-3'>
                  <label htmlFor='username' className='form-label'>
                    Username
                  </label>
                  <div className='custom-input-group'>
                    <span className='custom-input-group-text' id='at-symbol'>
                      @
                    </span>
                    <input type='text' className='custom-input' id='username' />
                  </div>
                </div>
              )}
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Contraseña
                </label>
                <input type='password' className='custom-input' id='password' />
              </div>
              <button type='submit' className='custom-button'>
                {selectedOption === 'registro' ? 'Registrarse' : 'Entrar'}
              </button>
            </form>
          )}
        </div>
        <div className='col-md-6'>
          {/* Contenido de la columna de la imagen */}
        </div>
      </div>
    </div>
  );
}
