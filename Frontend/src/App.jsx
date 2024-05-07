import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/styles.css';
import Layout from './modules/layout';
import LoginForm from './modules/login.jsx';
import RegisterForm from './modules/register';
import AboutPage from './modules/about.jsx';
import AppointmentPage from './modules/appointment.jsx';
import DoctorPage from './modules/doctor.jsx';
import DoctorViewPage from './modules/doctor-view/doctor-view';
import MutablePatientDetails from './modules/doctor-view/mutable-patient-details';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={ <Home /> } /> */}
          <Route path="login" element={ <LoginForm /> } />
          <Route path="register" element={ <RegisterForm /> } />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="appointment" element={<AppointmentPage />} />
          <Route path="doctor" element={<DoctorPage/>} />
          <Route path="doctorView" element={<DoctorViewPage/>} />
          {/* assuming that we pass ID to differentiate between patients */}
          <Route path="patient/:id" element={<MutablePatientDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


