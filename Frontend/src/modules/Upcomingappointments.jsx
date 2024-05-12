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
            connectWallet();
        } else if (!window.ethereum) {
            alert('Please install MetaMask to use this feature!');
        } else if (!isAuthenticated) {
            alert('Please log in to view upcoming appointments.');
            navigate('/login');
        }
    }, [isAuthenticated, web3]);

    const connectWallet = async (web3) => {
        try {
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]); // Assuming you only need the first account
            fetchAppointments(accounts[0], web3);
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
                const formattedData = appointmentData.map(app => ({
                    id: app.id.toString(), // Ensuring ID is a string
                    department: app.department,
                    doctor: app.doctor,
                    date: new Date(parseInt(app.date, 10) * 1000).toLocaleDateString(),
                    patientName: app.patientName,
                    contactDetails: app.contactDetails,
                    message: app.message
                }));
                setAppointments(formattedData);
            } else {
                console.error("Unexpected data format received:", appointmentData);
            };
        } catch (error) {
            console.error("Error fetching appointments", error);
        }
    };

    return (
        <div>
            <h1>Upcoming Appointments</h1>
            <ul>
                {appointments.length > 0 ? (
                    appointments.map((appointment, index) => (
                        <li key={index}>
                            {appointment.date} - {appointment.doctor} - {appointment.department}
                        </li>
                    ))
                ) : (
                    <p>No upcoming appointments found.</p>
                )}
            </ul>
        </div>
    );
}
export default UpcomingAppointments;