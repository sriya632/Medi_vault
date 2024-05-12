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
import ServicePage from './modules/services.jsx';
import ProfilePage from './modules/profile.jsx';
import { AuthProvider } from './modules/AuthContext.jsx';
import UpcomingAppointments from './modules/Upcomingappointments.jsx';
import PastAppointments from './modules/PastAppointments.jsx'
import DoctorLoginPage from './modules/doctorlogin.jsx';
export default function App(){
  return (
    <AuthProvider>
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
          <Route path="services" element={<ServicePage/>} />
          <Route path="profile" element={<ProfilePage/>} />
          <Route path="doctorlogin" element={<DoctorLoginPage/>} />
          {/* assuming that we pass ID to differentiate between patients */}
          <Route path="patient/:id" element={<MutablePatientDetails />} />
          <Route path="/upcoming-appointments" element={<UpcomingAppointments />} />
          <Route path="/past-appointments" element={<PastAppointments />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}


