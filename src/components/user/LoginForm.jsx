import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <h2>Iniciar Sesión en Ávida 🌳</h2>
        <form onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='Correo electrónico'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit'>Iniciar Sesión</button>
        </form>
        <p>¿Olvidaste tu contraseña?</p>
      </div>
    </div>
  );
}

export default LoginForm;
