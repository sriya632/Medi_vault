import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import {useNavigate} from "react-router-dom";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../contract_constants/appointment.js";
import { useAuth } from './AuthContext.jsx';

const UpcomingAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);
    const { isAuthenticated, ethereumAccount } = useAuth();
    const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !web3 && window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      connectWallet(web3Instance);
    } else if (!window.ethereum) {
      alert('Please install MetaMask to use this feature!');
    } else if (!isAuthenticated) {
      alert('Please log in to view upcoming appointments.');
      navigate('/login');
    }
  }, [isAuthenticated, web3]);

    useEffect(() => {
        if (account && web3) {
            fetchAppointments(account, web3);
        }
    }, [account, web3]);

    const connectWallet = async (web3) => {
        try {
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]); // Assuming you only need the first account
        } catch (error) {
            console.error("Error connecting to MetaMask", error);
        }
    };

  const fetchAppointments = async (account, web3) => {
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    try {
      const appointmentData = await contract.methods.getAppointmentsByPatient(account).call();
      console.log("Raw appointment data:", appointmentData);
      if (Array.isArray(appointmentData)) {
        const formattedData = appointmentData
          .map(app => ({
            id: app.id.toString(),
            department: app.department,
            doctor: app.doctor,
            date: new Date(parseInt(app.date, 10) * 1000),
            patientName: app.patientName,
            contactDetails: app.contactDetails,
            message: app.message
          }))
          .filter(app => app.date > new Date());
        setAppointments(formattedData);
      } else {
        console.error("Unexpected data format received:", appointmentData);
      }
    } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4">Upcoming Appointments</h1>
      {appointments.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Patient Name</th>
              <th>Contact Details</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.date.toLocaleDateString()}</td>
                <td>{appointment.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.department}</td>
                <td>{appointment.patientName}</td>
                <td>{appointment.contactDetails}</td>
                <td>{appointment.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No upcoming appointments found.</p>
      )}
    </div>
  );
};

export default UpcomingAppointments;