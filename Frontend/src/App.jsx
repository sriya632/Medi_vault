import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/styles.css';
import Layout from './modules/layout';
import LoginForm from './modules/login.jsx';
import RegisterForm from './modules/register';
import AboutPage from './modules/about.jsx';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={ <Home /> } /> */}
          <Route path="login" element={ <LoginForm /> } />
          <Route path="register" element={ <RegisterForm /> } />
          <Route path="about" element={ <AboutPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


