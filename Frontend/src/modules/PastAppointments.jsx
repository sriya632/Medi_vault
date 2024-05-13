// PastAppointments.jsx
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { useNavigate } from "react-router-dom";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../contract_constants/appointment.js";
import { D_P_CONTRACT_ABI, D_P_CONTRACT_ADDRESS } from "../contract_constants/DoctorComments.js";
import { useAuth } from './AuthContext.jsx';

const PastAppointments = () => {
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
      alert('Please log in to view past appointments.');
      navigate('/login');
    }
  }, [isAuthenticated, web3]);

  const connectWallet = async (web3) => {
    try {
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      fetchAppointments(accounts[0], web3);
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
    }
  };

  const fetchAppointments = async (account, web3) => {
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    try{
      const appointmentData = await contract.methods.getAppointmentsByPatient(account).call();
      if (Array.isArray(appointmentData)) {
        // Process each appointment to fetch comments
        const promises = appointmentData.map(async (app) => {
          const comments = await fetchComments(app.id, web3);
          return {
            id: app.id.toString(),
            department: app.department,
            doctor: app.doctor,
            date: new Date(parseInt(app.date, 10) * 1000),
            patientName: app.patientName,
            contactDetails: app.contactDetails,
            message: app.message,
            comments: comments || "No comments available or missed an appointment"
          };
        });
        const results = await Promise.all(promises);
        const pastAppointments = results.filter(app => app.date <= new Date());
        setAppointments(pastAppointments);
      }
      } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };

  const fetchComments = async (appointmentId,web3) => {
    const contract = new web3.eth.Contract(D_P_CONTRACT_ABI, D_P_CONTRACT_ADDRESS);
    try {
      const comments = await contract.methods.viewComment(appointmentId).call();
      return comments;
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4">Past Appointments</h1>
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
              <th>Doctor Comments</th>
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
                <td>{appointment.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No past appointments found.</p>
      )}
    </div>
  );
};

export default PastAppointments;