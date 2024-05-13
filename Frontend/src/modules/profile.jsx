import { useState, useEffect } from 'react';
import Web3 from "web3";
import {CONTRACT_ADDRESS,CONTRACT_ABI} from '../contract_constants/authentication.js';
import {useNavigate} from "react-router-dom";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bloodGroup: '',
    age: '',
    gender: '',
    address: '',
    pastMedicalHistory: '',
  });
  const navigate = useNavigate();
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [editMode, setEditMode] = useState(false);

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
      fetchUserDetails(account);
    }
  }, [account, web3]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]); // Assuming you only need the first account
        console.log('Connected with account:', accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
        alert('Failed to connect MetaMask. If you refused the connection, please allow it to interact with this dApp.');
      }
    } else {
      alert('Please install MetaMask to use this feature!');
    }
  };


  const fetchUserDetails = async (account) => {
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    try {
      const userDetails = await contract.methods.getUserDetails(account).call();
      const patientDetails = await contract.methods.getPatientDetails(account).call();

      setFormData({
        firstName: userDetails[0],
        lastName: userDetails[1],
        email: userDetails[2],
        phoneNumber: userDetails[3],
        gender: patientDetails[0],
        age: patientDetails[1],
        bloodGroup: patientDetails[2],
        address: patientDetails[3],
        pastMedicalHistory: patientDetails[4],
      });
      setIsDataFetched(true);
    } catch (error) {
      console.error('Error fetching user details:', error);
      alert('Failed to fetch user details from the blockchain.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = () => {
    // Toggle edit mode, don't submit form
    setIsDataFetched(false);
    setEditMode(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the form data to the backend or localStorage
    console.log('Form Data:', formData);
    if (!web3) {
      alert('Web3 is not initialized. Make sure MetaMask is installed.');
      return;
    }
    if (!account) {
      alert('Please connect to MetaMask.');
      return;
    }
    else {
      if (editMode) {
        try {
          const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
          console.log(account);
          // Example of a contract function call
          contract.methods.addPatientDetails(formData.gender, formData.age, formData.bloodGroup, formData.address, formData.pastMedicalHistory)
              .send({from: account, gas: 3000000})
              .then(result => {
                    console.log('Profile Saved', result)
                    alert('Profile Saved!');
                    setEditMode(false);
                    setIsDataFetched(true)
                  }
              )
              .catch(error => {
                console.error('Transaction failed: ', error);
                if (error.receipt) {
                  console.log('Transaction receipt: ', error.receipt); // Provides more details about the transaction failure
                }
              });
        } catch (error) {
          console.error(error);
          if (error.code === 4001) {
            // MetaMask error code for user rejected transaction
            alert('Transaction failed! Please enter correct values.');
          } else if (error.message.includes('insufficient funds')) {
            // Insufficient funds error
            alert('Transaction failed: Insufficient funds to complete the transaction.');
          } else {
            // Other unexpected errors
            alert('Transaction failed: Unexpected error occurred.');
          }
        }
      }
    }
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            readOnly={isDataFetched}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            readOnly={isDataFetched}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly={isDataFetched}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Age">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            readOnly={isDataFetched}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Gender"> Gender</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            readOnly={isDataFetched}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="blood group">Blood Group</label>
          <select
            className="form-control"
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            readOnly={isDataFetched}
          >
            <option value="">Select Blood Group</option>
            <option value="A+ve">A +ve</option>
            <option value="A-ve">A -ve</option>
            <option value="B+ve">B +ve</option>
            <option value="B-ve">B -ve</option>
            <option value="AB+ve">AB +ve</option>
            <option value="AB-ve">AB -ve</option>
            <option value="O+ve">O +ve</option>
            <option value="O-ve">O -ve</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            readOnly={isDataFetched}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pastMedicalHistory">Past Medical History</label>
          <textarea
            className="form-control"
            id="pastMedicalHistory"
            name="pastMedicalHistory"
            value={formData.pastMedicalHistory}
            onChange={handleChange}
            readOnly={isDataFetched}
          />
        </div>
        <button type="button" onClick={handleEdit} className="btn btn-secondary">
          {editMode ? 'Cancel' : 'Edit'}
        </button>
        {editMode && (
            <button type="submit" className="btn btn-primary">
              Save
            </button>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;