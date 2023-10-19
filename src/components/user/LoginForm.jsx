import React, { useState } from 'react';

export default function LoginForm() {
  const [selectedOption, setSelectedOption] = useState('registro');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='text-center'>
            <h1>
              {selectedOption === 'registro' ? 'Registro' : 'Iniciar Sesión'}
            </h1>
          </div>
          <form method='post' action='index.html'>
            <div className='mb-3'>
              {selectedOption === 'registro' && (
                <>
                  <label htmlFor='name' className='form-label'>
                    Nombre
                  </label>
                  <input type='text' className='form-control' id='name' />
                </>
              )}
              <label htmlFor='email' className='form-label'>
                Correo Electrónico
              </label>
              <input type='email' className='form-control' id='email' />
            </div>
            {selectedOption === 'registro' && (
              <div className='mb-3'>
                <label htmlFor='username' className='form-label'>
                  Username
                </label>
                <div className='input-group'>
                  <span className='input-group-text' id='at-symbol'>
                    @
                  </span>
                  <input type='text' className='form-control' id='username' />
                </div>
              </div>
            )}
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Contraseña
              </label>
              <input type='password' className='form-control' id='password' />
            </div>
            <button type='submit' className='btn btn-primary'>
              {selectedOption === 'registro' ? 'Registrarse' : 'Entrar'}
            </button>
          </form>
        </div>
        <div className='col-md-6'>
          <div className='text-center'>
            <h1>Selecciona una opción</h1>
            <div className='btn-group' role='group' aria-label='Opciones'>
              <input
                type='radio'
                id='radioRegistro'
                name='opcion'
                value='registro'
                checked={selectedOption === 'registro'}
                onChange={handleOptionChange}
              />
              <label htmlFor='radioRegistro' className='btn btn-secondary'>
                Registro
              </label>
              <input
                type='radio'
                id='radioInicioSesion'
                name='opcion'
                value='inicioSesion'
                checked={selectedOption === 'inicioSesion'}
                onChange={handleOptionChange}
              />
              <label htmlFor='radioInicioSesion' className='btn btn-secondary'>
                Iniciar Sesión
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
