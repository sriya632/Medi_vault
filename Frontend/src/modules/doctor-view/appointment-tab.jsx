import React,{useEffect,useState} from 'react';
import Web3 from 'web3';
import {useNavigate} from "react-router-dom";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../contract_constants/appointment.js";
import { D_CONTRACT_ABI, D_CONTRACT_ADDRESS } from "../../contract_constants/Doctor.js";
import { Link } from 'react-router-dom';
import { useAuth } from '.././AuthContext.jsx';

const AppointmentTab = () => {
    // Sample data for appointments
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);
    const navigate = useNavigate();
    const { isAuthenticated, ethereumAccount } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            connectWallet();
        } else {
            alert('Please install MetaMask to use this feature!');
        }
    }, []);

    useEffect(() => {
        if (account && web3) {
            getDoctorName(account);
        }
    }, [account, web3]);

    const connectWallet = async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]); // Assuming you only need the first account

        } catch (error) {
            console.error("Error connecting to MetaMask", error);
        }
    };

    const getDoctorName = async (account) => {
        const contract = new web3.eth.Contract(D_CONTRACT_ABI, D_CONTRACT_ADDRESS);
        try {
            const doctorName = await contract.methods.getDoctorName(account).call();
            console.log(doctorName);
            fetchAppointments(doctorName, account);
        }
        catch(error){
            console.error("Error fetching appointments", error);
        }
    };

    const fetchAppointments = async (doctorName,account) => {
        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        try {
            const fetchedAppointments = await contract.methods.getAppointmentsByDoctor(doctorName).call();
            setAppointments(fetchedAppointments.map(app => ({
                id: app.patientAddress.toString(),
                u_id: app.id.toString(),
                patientName: app.patientName,
                date: new Date(parseInt(app.date, 10) * 1000).toLocaleDateString(),
                time: new Date(parseInt(app.date, 10) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Update as necessary
            })));

        } catch (error) {
            console.error("Error fetching appointments", error);
        }
    };

    return (
        <div>
            <h3>Upcoming Appointments</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>
                                <Link to={`/patient/${appointment.id}/${appointment.u_id}`} className="btn btn-primary btn-sm">View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentTab;
