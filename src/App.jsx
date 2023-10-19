import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import LoginForm from './components/user/LoginForm';
import Store from './components/tienda/Ecommerce';
import NotFound from './components/error/Error404';
import Comentarios from './admin/Comentarios';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/tienda' element={<Store />} />
        <Route path='*' element={<NotFound />} />{' '}
        <Route path='/comentarios' element={<Comentarios />} />
      </Routes>
    </Router>
  );
}

export default App;
