import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../contract_constants/appointment.js";

const UpcomingAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            connectWallet(web3Instance);
        } else {
            console.log("Please install MetaMask to use this feature!");
        }
    }, []);

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
            setAppointments(appointmentData.map(app => ({
                id: app.id,
                department: app.department,
                doctor: app.doctor,
                date: new Date(app.date * 1000).toLocaleDateString(), // Assuming 'date' is a UNIX timestamp
                patientName: app.patientName,
                contactDetails: app.contactDetails,
                message: app.message
            })));
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