import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resultado = await axios.get('http://localhost:8005/listar');
    setComentarios(resultado.data);
  };

  return (
    <div className='container'>
      <h1 className='text-center mb-5'>Comentarios</h1>
      <table className='table border shadow'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>ID</th>
            <th scope='col'>Texto</th>
            <th scope='col'>Fecha</th>
            <th scope='col'>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {comentarios.map((comentario, index) => (
            <tr key={comentario.id}>
              <th scope='row' key={index}>
                {index + 1}
              </th>
              <td>{comentario.id}</td>
              <td>{comentario.texto}</td>
              <td>{comentario.createAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
