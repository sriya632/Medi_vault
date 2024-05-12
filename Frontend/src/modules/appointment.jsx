import {useEffect, useState} from 'react';
import Web3 from 'web3';
import {useNavigate} from "react-router-dom";
import {CONTRACT_ABI, CONTRACT_ADDRESS} from "../contract_constants/appointment.js";
import { useAuth } from './AuthContext.jsx';
// doctors.js
export const doctors = [
  { name: 'Thomas Henry', department: 'Cardiology' },
  { name: 'Thomas Alexander', department: 'Cardiology' },
  { name: 'Harrison Thomas', department: 'Traumatology' },
  { name: 'Thomas Henry', department: 'Hematology' },
  { name: 'Jonas Thompson', department: 'Cardiology' },
  { name: 'Harrision Samuel', department: 'Radiology' },
  { name: 'Henry Sameul', department: 'Palmology' },
  { name: 'Henry Forth', department: 'Hematology' },
  { name: 'Alexandar James', department: 'Dental' },
  { name: 'Edward john', department: 'Pediatrics' },
  
];

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    message: ''
  });
  const { isAuthenticated, ethereumAccount } = useAuth();
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]); // New state for filtered doctors
  //const navigate = useNavigate();
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const {login } = useAuth();
  const handleChange = (e) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Filter the doctors based on the selected department
    if (e.target.name === 'department') {
      const selectedDepartment = e.target.value;
      const filteredDoctors = selectedDepartment
        ? doctors.filter((doc) => doc.department === selectedDepartment)
        : [];
      setFilteredDoctors(filteredDoctors);
    }
  };

  const date = new Date(formData.date + 'T00:00:00Z'); // Ensures the date is at midnight UTC
  const timestamp = Math.floor(date.getTime() / 1000); // Converts the date object to a Unix timestamp

  useEffect(() => {
    if (isAuthenticated && !web3 && window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      connectWallet();
    } else if (!window.ethereum) {
      alert('Please install MetaMask to use this feature!');
    } else if (!isAuthenticated) {
      alert('Please log in to book an appointment.');
      navigate('/login');
    }
  }, [isAuthenticated, web3]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (!web3) {
      alert('Web3 is not initialized. Make sure MetaMask is installed.');
      return;
    }
    if (!account) {
      alert('Please connect to MetaMask.');
      return;
    }
    else {
    // Handle form submission logic here
    try {
      // Example of a contract function call
      const contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
      contract.methods.createAppointment(formData.department, formData.doctor,timestamp,
          account,formData.name, formData.phone, formData.message)
          .send({from: account, gas: 3000000}).then(result => {
        console.log('Transaction successful: ', result);
        alert('Appointment Booked!');
        navigate('/upcoming-appointments');
      }).catch(error => {
        console.error('Transaction failed: ', error);
        if (error.code === 4001) {
          // MetaMask error code for user rejected transaction
          alert('Transaction failed: Transaction rejected by user.');
        } else if (error.message.includes('insufficient funds')) {
          alert('Transaction failed: Insufficient funds to complete the transaction.');
        } else if(error.message.includes('unauthorized')){
          alert('Unauthorized user');
        }
        else {
          alert('Transaction failed: Unexpected error occurred.');
        }
      });
    } catch (error) {
      console.error(error);
      alert('Appointment Booking failed. See console for details.');
    }
    }
  };

  return (
      <>
        <section className="page-title bg-1">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Book your Seat</span>
                  <h1 className="text-capitalize mb-5 text-lg">Appointment</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="appointment section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="mt-3">
                  <div className="feature-icon mb-3">
                    <i className="icofont-support text-lg"></i>
                  </div>
                  <span className="h3">Call for an Emergency Service!</span>
                  <h2 className="text-color mt-3">+84 789 1256</h2>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="appointment-wrap mt-5 mt-lg-0 pl-lg-5">
                  <h2 className="mb-2 title-color">Book an appointment</h2>
                  <p className="mb-4">
                    Book an appointment with a Doctor ensuring that you can secure a visit that fits your schedule, ultimately facilitating better access to necessary medical consultations and treatments.
                  </p>
                  <form id="#" className="appointment-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                              className="form-control"
                              id="department-select"
                              name="department"
                              onChange={handleChange}
                              value={formData.department}
                          >
                            <option value="">Choose Department</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Dental">Dental</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Traumatology">Traumatology</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                              className="form-control"
                              id="doctor-select"
                              name="doctor"
                              onChange={handleChange}
                              value={formData.doctor}
                          >
                            <option value="">Select Doctors</option>
                            {filteredDoctors.map((doc, index) => (
                                <option key={index} value={doc.name}>
                                  {doc.name}
                                </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                              name="date"
                              id="date"
                              type="date"
                              className="form-control"
                              placeholder="dd/mm/yyyy"
                              onChange={handleChange}
                              value={formData.date}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                              name="time"
                              id="time"
                              type="time"
                              className="form-control"
                              placeholder="Time"
                              onChange={handleChange}
                              value={formData.time}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control"
                              placeholder="Full Name"
                              onChange={handleChange}
                              value={formData.name}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                              name="phone"
                              id="phone"
                              type="number"
                              className="form-control"
                              placeholder="Phone Number"
                              onChange={handleChange}
                              value={formData.phone}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group-2 mb-4">
                    <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="6"
                        placeholder="Your Message"
                        onChange={handleChange}
                        value={formData.message}
                    ></textarea>
                    </div>

                    <button type="submit" className="btn btn-main btn-round-full">
                      Make Appointment <i className="icofont-simple-right ml-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default AppointmentPage;