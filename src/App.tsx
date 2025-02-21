import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/pages/register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from the root to /welcome */}
        <Route path='/' element={<Navigate to='/register' />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
