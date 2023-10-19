import Landing from './components/landing/Landing';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/user/LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
