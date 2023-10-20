import React, { useState } from 'react';
import axios from 'axios';
import './regisform.css';

function RegisForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleRegistro = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
      birthday,
    };

    try {
      const response = await axios.post('URL_DEL_API', userData);

      console.log('Usuario registrado con éxito', response.data);
    } catch (error) {
      console.error('Error al registrar usuario', error);
    }
  };

  return (
    <div className='formregis-background'>
      <div className='registration-form'>
        <h1>Regístrate en Ávida 🌳</h1> {/* Encabezado dentro del formulario */}
        <form onSubmit={handleRegistro}>
          <div className='form-group'>
            <div className='form-row'>
              <div className='col'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className='col'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Apellido'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Correo Electrónico'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Fecha de Nacimiento</label>
            <input
              type='date'
              className='form-control'
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisForm;
