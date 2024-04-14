import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/styles.css';
import Layout from './modules/layout';
import LoginForm from './modules/login.jsx';
import RegisterForm from './modules/register';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={ <Home /> } /> */}
          <Route path="login" element={ <LoginForm /> } />
          <Route path="register" element={ <RegisterForm /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


