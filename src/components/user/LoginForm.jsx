import React, { useState } from 'react';
import './loginform.css';

export default function LoginForm() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='background-container'>
      <div className='form-container'>
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
                  Login
                </button>
              </li>
            </ul>
          </div>
          {selectedOption && (
            <div className='loginform-col-md-6-fields'>
              <form method='post' action='index.html'>
                {selectedOption === 'registro' && (
                  <div className='mb-3'>
                    <label htmlFor='name' className='form-label'></label>
                    <input
                      type='text'
                      className='custom-input'
                      id='name'
                      placeholder='Ingresa tu nombre'
                    />
                  </div>
                )}
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'></label>
                  <input
                    type='email'
                    className='custom-input'
                    id='email'
                    placeholder='Ingresa tu correo electrónico'
                  />
                </div>
                {selectedOption === 'registro' && (
                  <div className='mb-3'>
                    <label htmlFor='username' className='form-label'></label>
                    <input
                      type='text'
                      className='custom-input'
                      id='username'
                      placeholder='Crea un nombre de usuario'
                    />
                  </div>
                )}
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'></label>
                  <input
                    type='password'
                    className='custom-input'
                    id='password'
                    placeholder='Ingresa tu contraseña'
                  />
                </div>
                <button type='submit' className='custom-button'>
                  {selectedOption === 'registro' ? 'Registrarse' : 'Entrar'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
