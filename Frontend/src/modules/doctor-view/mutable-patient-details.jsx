import React, {useEffect ,useState } from 'react';
import { useParams } from 'react-router-dom';
import Web3 from 'web3';
import {useNavigate} from "react-router-dom";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../contract_constants/authentication.js";
import { D_P_CONTRACT_ABI, D_P_CONTRACT_ADDRESS } from "../../contract_constants/DoctorComments.js";
import { Link } from 'react-router-dom';
import { useAuth } from '.././AuthContext.jsx';

const MutablePatientDetails = () => {

    // use this ID to query for a specific patient 
    const { id, u_id } = useParams();
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    // Sample patient data
    const [patient, setPatient] = useState({id: '1',
        firstName: '',
        lastName: '',
        bloodGroup: '',
        email: '',
        phoneNumber: '',
        previousHealthIssues: [],
        doctorsComments: '',
        commentsSubmitted: false
    });

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
            getPatientDetails(account);
            fetchComments(u_id);
        }
    }, [account, web3, u_id]);

    const connectWallet = async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]); // Assuming you only need the first account

        } catch (error) {
            console.error("Error connecting to MetaMask", error);
        }
    };

    const getPatientDetails = async (account) => {
        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        try {
            const userDetails = await contract.methods.getUserDetails(id).call();
            const patientDetails = await contract.methods.getPatientDetails(id).call();
            console.log(patientDetails);
            setPatient({
                firstName: userDetails[0],
                lastName: userDetails[1],
                email: userDetails[2],
                phoneNumber: userDetails[3],
                sex: patientDetails[0],
                age: patientDetails[1].toString(),
                bloodGroup: patientDetails[2],
                previousHealthIssues: patientDetails[4].split(',')
            });
        }
        catch(error){
            console.error("Error fetching appointments", error);
        }
    };

    const handleCommentChange = (event) => {
        setPatient(prevPatient => ({
            ...prevPatient,
            doctorsComments: event.target.value,
        }));
    };

    const fetchComments = async (appointmentId) => {
        const contract = new web3.eth.Contract(D_P_CONTRACT_ABI, D_P_CONTRACT_ADDRESS);
        try {
            const comments = await contract.methods.viewComment(appointmentId).call();
            setPatient(prev => ({
                ...prev,
                doctorsComments: comments,
                commentsSubmitted: comments !== ''
            }));
        } catch (error) {
            console.error("Failed to fetch comments:", error);
        }
    };

    const handleSubmitComments = () => {
        if (!patient.doctorsComments || !patient.doctorsComments.trim()) {
            alert("Please enter some comments before submitting.");
            return;
        }
        // implement the logic to submit and update the comments
        const contract = new web3.eth.Contract(D_P_CONTRACT_ABI, D_P_CONTRACT_ADDRESS);
        try {
            contract.methods.addComment(u_id, patient.doctorsComments)
                .send({ from: account, gas: 3000000 }).then(result => {
                console.log('Comments submitted:', patient.doctorsComments);
                setPatient(prevState => ({
                    ...prevState,
                    commentsSubmitted: true
                }));
                alert("Comments successfully submitted!");
            }).catch(error => {
                console.error('Submit failed: ', error);
                if (error.code === 4001) {
                    // MetaMask error code for user rejected transaction
                    alert('Submit failed: Transaction rejected by user.');
                } else if (error.message.includes('insufficient funds')) {
                    alert('Transaction failed: Insufficient funds to complete the transaction.');
                } else if (error.message.includes('unauthorized')) {
                    alert('Unauthorized user');
                } else {
                    alert('Transaction failed: Unexpected error occurred.');
                }
            });
        } catch (error) {
            console.error("Error fetching patient details", error);
        }
    };

    if (!patient) return <div>Loading or no patient data...</div>;
    return (
        <div className="container">
            <div className="mb-4">
                <h2>{patient.lastName}, {patient.firstName}</h2>
                <div>
                    <div><strong>Age:</strong> {patient.age}</div>
                    <div><strong>Sex:</strong> {patient.sex}</div>
                    <div><strong>Blood Group:</strong> {patient.bloodGroup}</div>
                    <div><strong>Email:</strong> {patient.email}</div>
                    <div><strong>Phone Number:</strong> {patient.phoneNumber}</div>
                </div>
                <div className="mt-3">
                    {/* This section is kinda ugly, need some better understanding of the vision behind the design */}
                    <strong>Previous Health Issues:</strong>
                    <ul>
                        {patient.previousHealthIssues.map((issue, index) => (
                            <li key={index}>{issue}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mb-4">
                <h4>Doctor's Comments</h4>
                <textarea
                    className="form-control"
                    rows="5"
                    value={patient.doctorsComments}
                    onChange={handleCommentChange}
                    disabled={patient.commentsSubmitted}
                ></textarea>
                {!patient.commentsSubmitted && (  // Conditionally render the submit button
                    <button className="btn btn-primary mt-2" onClick={handleSubmitComments}>
                        Submit
                    </button>
                )}
            </div>
            <div className="mb-4">
                <h4>Reports</h4>
                {/* Add content for reports section */}
            </div>
        </div>
    );
}

export default MutablePatientDetails;
